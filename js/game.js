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
    if (won) {
        wonLabel = "label-success";
    }
    return "<div class='label " + wonLabel + "'> " + name + " </div>";
}

var putTeamsInTable = function() {
    var currentTeamGame = [];
    for (var i=0; i < Teams.length; i++) {
        currentTeamGame.push(0);
    }
    for (var gm=0; gm < lines.length; ++gm) {
        for (var i=0; i < lines[gm].length; i++) {
            if (lines[gm][i] <= Teams.length && lines[gm][i] > 0) {
                var teamIndex = lines[gm][i] - 1;
                var currentTeam = Teams[ teamIndex ];
                var won = false;
                if (currentTeamGame[ teamIndex ] < currentTeam.scores.length) {
                    if (currentTeam.scores[ currentTeamGame[ teamIndex ] ] == 1) {
                        won = true;
                    }
                    currentTeamGame[ teamIndex ] ++;
                }
                putHTMLInTable(gm, i, createTeamHTML( currentTeam, won ));
            }
        }
    }
}