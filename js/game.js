var setupGame = function() {
    // Give names to nameless teams
    for (var i=0; i<Teams.length; i++) {
        if (!("name" in Teams[i] && Teams[i].name !== undefined && Teams[i].name !== "")) {
            Teams[i].name = "Team #" + (i+1);
        }
    }
    // Permute the Teams based on the Random permuatation
    var newTeams = [];
    for (var i=0; i<randPerm.length;i++) {
        newTeams.push( Teams[ randPerm[i] ] );
    }
    Teams = newTeams
}

var createTeamHTML = function(team, won) {
    var name = team.name;
    var wonLabel = "label-default";
    var tooltipText = team.member1 + " and " + team.member2
    if (won !== undefined) {
        if (won == 1) {
            wonLabel = "label-success";
            tooltipText = tooltipText + " won";
        } else if (won == 0) {
            wonLabel = "label-warning";
            tooltipText = tooltipText + " lost";
        } else if (won == 2) {
            wonLabel = "label-info";
            tooltipText = tooltipText + " won";
        } else if (won == -1) {
            wonLabel = "label-danger";
            tooltipText = tooltipText + " disqualified";
        }
    }
    return "<div class='team label " + wonLabel + "' data-toggle='tooltip' data-placement='right' title='" + tooltipText + "'> " + name + " </div>";
}

var putTeamsInHierarchy = function() {
    var currentTeamGame = [];
    for (var i=0; i < Teams.length; i++) {
        currentTeamGame.push(0);
    }
    for (var gm=0; gm < lines.length; ++gm) {
        for (var i=0; i < lines[gm].length; i++) {
            if (lines[gm][i] <= Teams.length && lines[gm][i] > 0) {
                var teamIndex = lines[gm][i] - 1;
                var currentTeam = Teams[ teamIndex ];
                var won = undefined;
                if (currentTeamGame[ teamIndex ] < currentTeam.scores.length) {
                    won = currentTeam.scores[ currentTeamGame[ teamIndex ] ];
                    currentTeamGame[ teamIndex ] ++;
                }
                putHTMLInTable(gm, i, createTeamHTML( currentTeam, won ));
            }
        }
    }

    $('.team').tooltip();
}

var shouldAddTeamInTable = function(team) {
    var gamesLost = 0;
    for (var j=0; j < team.scores.length; ++j) {
        if (team.scores[j] == 0) {
            gamesLost += 1;
        } else if (team.scores[j] == -1) {
            return false;
        }
    }
    return (gamesLost < 2);
}

var putTeamsInTable = function() {
    for (var i=0; i < Teams.length; ++i) {
        var gamesWon = 0;
        var gamesLost = 0;
        for (var j=0; j < Teams[i].scores.length; ++j) {
            if (Teams[i].scores[j] == 1) {
                gamesWon += 1;
            } else if (Teams[i].scores[j] == 0) {
                gamesLost += 1;
            }
        }
        var nextGame = ""
        if (NextGames[i] > 0) {
            // NextGames is indexed from 1
            nextGame = Teams[ NextGames[i] - 1 ].name;
        }
        teamRow = ""
        if (shouldAddTeamInTable(Teams[i])) {
            teamRow += "<tr class='success'>";
        } else {
            teamRow += "<tr>"
        }
        teamRow += "<td class='hier-item'>" + Teams[i].name + "</td>";
        teamRow += "<td class='hier-item'>" + Teams[i].member1 + " " + Teams[i].email1 + "</td>";
        teamRow += "<td class='hier-item'>" + Teams[i].member2 + " " + Teams[i].email2 + "</td>";
        teamRow += "<td class='hier-item'>" + gamesWon + "</td>";
        teamRow += "<td class='hier-item'>" + gamesLost + "</td>";
        teamRow += "<td class='hier-item'>" + nextGame + "</td>";
        teamRow += "</tr>";

        var tableBody = $(".teams-table").find("tbody");
        tableBody.append(teamRow);
    }
}