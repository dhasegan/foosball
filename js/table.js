var teamsIndices = []

var drawGame = function(column, startRow, stopRow) {
    $('.hierarchy-table').find('tr:nth-child(' + startRow + ')').find('td:nth-child(' + column + ')').css("border-top", "1px solid #000000")
    $('.hierarchy-table').find('tr:nth-child(' + stopRow + ')').find('td:nth-child(' + column + ')').css("border-bottom", "1px solid #000000")
    for (var i=startRow; i<=stopRow; ++i) {
        $('.hierarchy-table').find('tr:nth-child(' + i + ')').find('td:nth-child(' + column + ')').css("border-right", "1px solid #000000")
    }
}
var drawLine = function(column, row) {
    $('.hierarchy-table').find('tr:nth-child(' + row + ')').find('td:nth-child(' + column + ')').css("border-top", "1px solid #000000")
}

// game_nr and item_nr indexed from 0
var putHTMLInTable = function(game_nr, item_nr, html) {
    $('.hierarchy-table').find('tr:nth-child(' + (teamsIndices[game_nr][item_nr]) + ')').find('td:nth-child(' + (game_nr+1) + ')').html(html);
}

var initializeTable = function() {
    var rows = 85;
    var cols = 8;
    var $table = $(".hierarchy-table");
    for (var i=0; i< rows; i++) {
        var str = "<tr> "
        for (var j=0;j < cols; j++) {
            str = str + "<td class='hier-item'> </td>"
        }
        str = str + " </tr>"
        $table.append(str)
    }
    $('td').css("border-top", "0px solid #ddd");

    // 8 Rounds
    for (var i=0; i<8;++i) {
        teamsIndices.push([]);
    }

    // Round 1
    for (var i=0; i<8; ++i){
        drawGame(1, 2 + 6*i, 2 + 6*i + 3);
        teamsIndices[0].push( 2 + 6*i - 1 );
        teamsIndices[0].push( 2 + 6*i + 3 );
    }
    // Round 2
    for (var i=0; i<8; i += 2) {
        drawGame(2, 2 + 6*i + 2, 2 + 6 * (i+1) + 1);
        teamsIndices[1].push( 2 + 6*i + 2 - 1 );
        teamsIndices[1].push( 2 + 6*(i+1) + 1 );
    }
    // Round 3
    for (var i=0; i<8; i += 4) {
        drawGame(3, 2 + 6*i + 4, 2 + 6 * (i+2) + 4);
        teamsIndices[2].push( 2 + 6*i + 4 - 1 );
        teamsIndices[2].push( 2 + 6*(i+2) + 4 );
    }
    // Round 5
    for (var i=0; i<8; i += 8) {
        // Round 4 extra lines
        drawLine(4, 2 + 6*i + 8);
        drawLine(4, 2 + 6*(i+4) + 10 + 1);
        drawGame(5, 2 + 6*i + 8, 2 + 6 * (i+4) + 10);
        teamsIndices[4].push( 2 + 6*i + 8 - 1 );
        teamsIndices[4].push( 2 + 6*(i+4) + 10 );
    }

    // Loser's bracket
    // Round 1
    for (var i=0; i<4; ++i) {
        drawGame(1, 55 + 9*i, 55 + 9*i + 3);
        teamsIndices[0].push( 55 + 9*i - 1 );
        teamsIndices[0].push( 55 + 9*i + 3 );
    }
    // Round 2
    for (var i=0; i<4; ++i) {
        drawGame(2, 55 + 9*i - 2, 55 + 9*i + 1);
        teamsIndices[1].push( 55 + 9*i - 2 - 1 );
        teamsIndices[1].push( 55 + 9*i + 1 );
    }
    // Round 3
    for (var i=0; i<4; i += 2) {
        drawGame(3, 55 + 9*i , 55 + 9*(i+1) - 1);
        teamsIndices[2].push( 55 + 9*i - 1 );
        teamsIndices[2].push( 55 + 9*(i+1) - 1 );
    }
    // Round 4
    for (var i=0; i<4; i += 2) {
        drawGame(4, 55 + 9*i - 4 , 55 + 9*i + 4);
        teamsIndices[3].push( 55 + 9*i - 4 - 1 );
        teamsIndices[3].push( 55 + 9*i + 4 );
    }
    // Round 5
    for (var i=0; i<4; i += 4) {
        drawGame(5, 55 + 9*i , 55 + 9*(i+2) );
        teamsIndices[4].push( 55 + 9*i - 1 );
        teamsIndices[4].push( 55 + 9*(i+2) );
    }
    // Round 6
    for (var i=0; i<4; i += 4) {
        drawGame(6, 55 + 9*i - 9, 55 + 9*i + 9 );
        teamsIndices[5].push( 55 + 9*i - 9 - 1 );
        teamsIndices[5].push( 55 + 9*i + 9 );
    }

    // Final Round
    drawLine(6, 24);
    drawGame(7, 24, 55);
    teamsIndices[6].push( 24 - 1 );
    teamsIndices[6].push( 55 );

    // Winner
    drawLine(8,39);
    teamsIndices[7].push( 38 );

    putHelpInTable();
}

var putHelpInTable = function() {
    $('.hierarchy-table').find('tr:nth-child(' + (55 - 4) + ')').find('td:nth-child(' + 1 + ')').text("Loser's bracket:");
}