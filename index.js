var ind_player_score_team1 = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
var ind_player_score_team2 = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
var ind_score_team1 = [];
var ind_score_team2 = [];

var wick_count_team1 = 0;
var wick_count_team2 = 0;

var current_player_team1 = 0;
var current_player_team2 = 0;

var total_score_team1 = 0;
var total_score_team2 = 0;

var currentball_team1 = 1;
var currentball_team2 = 1;

var player = 1;
var player2 = 1;

document.getElementById("generateresult").disabled = true;
document.getElementById("bat2").disabled = true;





function batbyTeam1() {

    if (current_player_team1 < 10) {
        document.getElementById("bat2").disabled = true;
        const scoreforball = [1, 2, 3, 4, 6, 0];

        var randomNum = Math.floor(Math.random() * 6);

        total_score_team1 += scoreforball[randomNum];

        document.getElementById("t1p" + (current_player_team1 + 1) + "b" + currentball_team1).innerHTML = scoreforball[randomNum];

        console.log(total_score_team1);

        document.getElementById("team1highscore").innerHTML = total_score_team1;

        ind_player_score_team1[current_player_team1].push(scoreforball[randomNum]);

        if (scoreforball[randomNum] == 0) {

            current_player_team1++;
            currentball_team1 = 0;

        }
        var x = ind_player_score_team1[9].includes(0) || ind_player_score_team1.length == 6;

        if (x) {
            return console.log("inning over");
        }
        if (ind_player_score_team1[current_player_team1].length == 6) {

            current_player_team1++;
            currentball_team1 = 0;
        }
        console.log(ind_player_score_team1);
    } else {
        document.getElementById("bat1").disabled = true;
        document.getElementById("bat2").disabled = false;

    }
    currentball_team1++;

}

function batbyTeam2() {

    count++;

    if (current_player_team2 < 10) {

        document.getElementById("bat1").disabled = true;

        const scoreforball = [1, 2, 3, 4, 6, 0];

        var randomNum = Math.floor(Math.random() * 6);

        total_score_team2 += scoreforball[randomNum];

        if (total_score_team2 > total_score_team1) {

            document.getElementById("bat2").disabled = true;

            document.getElementById("generateresult").disabled = false;
        }

        document.getElementById("t2p" + (current_player_team2 + 1) + "b" + currentball_team2).innerHTML = scoreforball[randomNum];


        console.log(total_score_team2);

        document.getElementById("team2highscore").innerHTML = total_score_team2;

        ind_player_score_team2[current_player_team2].push(scoreforball[randomNum]);

        if (scoreforball[randomNum] == 0) {

            current_player_team2++;
            currentball_team2 = 0;

        }
        var x = ind_player_score_team2[9].includes(0) || ind_player_score_team2.length == 6;

        if (x) {
            return console.log("inning over");
        }
        if (ind_player_score_team2[current_player_team2].length == 6) {

            current_player_team2++;
            currentball_team2 = 0;
        }
        console.log(ind_player_score_team2);
    } else {
        document.getElementById("bat2").disabled = true;
        document.getElementById("generateresult").disabled = false;
    }
    currentball_team2++;
}

//////generate table

//team 1 table//////////////////////////////////////////////////////////////////////////////////////////////////////////

for (var i = 0; i <= 10; i++) {
    var row_element = document.createElement("tr");
    row_element.setAttribute("id", "t1r" + i);
    document.getElementById("team1scoreboard").appendChild(row_element);

    for (var j = 0; j <= 7; j++) {

        var col_element = document.createElement("th");
        col_element.setAttribute("id", "t1p" + i + "b" + j)

        document.getElementById("t1r" + i).appendChild(col_element);

        if (i == 0 && j == 0) {
            document.getElementById("t1p" + i + "b" + j).innerHTML = "TEAM 1"
        } else if (i == 0 & j == 7) {
            document.getElementById("t1p" + i + "b" + j).innerHTML = "TOTAL";
        } else if (i == 0) {
            document.getElementById("t1p" + i + "b" + j).innerHTML = "B" + j;
        }

        if (i != 0 && j == 0) {
            document.getElementById("t1p" + i + "b" + j).innerHTML = "PLAYER " + i;
        }
    }
}


/////team 2 table/////////////////////////////////////////////////////////////////////////////////////////////////////////////


for (var i = 0; i <= 10; i++) {
    var row_element = document.createElement("tr");
    row_element.setAttribute("id", "t2r" + i);
    document.getElementById("team2scoreboard").appendChild(row_element);

    for (var j = 0; j <= 7; j++) {

        var col_element = document.createElement("th");
        col_element.setAttribute("id", "t2p" + i + "b" + j)

        document.getElementById("t2r" + i).appendChild(col_element);

        if (i == 0 && j == 0) {
            document.getElementById("t2p" + i + "b" + j).innerHTML = "TEAM 2"
        } else if (i == 0 & j == 7) {
            document.getElementById("t2p" + i + "b" + j).innerHTML = "TOTAL";
        } else if (i == 0) {
            document.getElementById("t2p" + i + "b" + j).innerHTML = "B" + j
        }

        if (i != 0 && j == 0) {
            document.getElementById("t2p" + i + "b" + j).innerHTML = "PLAYER " + i;
        }
    }
}

//end of table///////////////////////////////////////////////////////////////////////////////////////////////////////////


function generateResult() {


    var ind_play_team1 = ind_player_score_team1.map(function (subarray) {

        return subarray.reduce(function (acc, cv) {

            return acc + cv;

        }, 0)
    })

    ind_play_team1.map(function (elements) {
        document.getElementById("t1p" + player + "b7").innerHTML = elements;
        if (player < 11) {
            player++;
        }

    })

    var ind_play_team2 = ind_player_score_team2.map(function (subarray) {

        return subarray.reduce(function (acc, cv) {

            return acc + cv;

        }, 0)
    })

    ind_play_team2.map(function (elements) {
        document.getElementById("t2p" + player2 + "b7").innerHTML = elements;
        if (player2 < 11) {
            player2++;
        }

    })

    if (total_score_team1 > total_score_team2) {
        document.getElementById("matchown").innerHTML = "TEAM1";

        var max = Math.max(...ind_play_team1);
        var myplayer = ind_play_team1.indexOf(max);

        document.getElementById("playernum").innerHTML = "PLAYER" + (myplayer + 1);
        document.getElementById("whichteam").innerHTML = "TEAM 1"
        document.getElementById("scoreid").innerHTML = "SCORE :" + max;




    } else {
        document.getElementById("matchown").innerHTML = "TEAM2";
        var max = Math.max(...ind_play_team2);
        var myplayer = ind_play_team2.indexOf(max);

        document.getElementById("playernum").innerHTML = "PLAYER" + (myplayer + 1);
        document.getElementById("whichteam").innerHTML = "TEAM 2"
        document.getElementById("scoreid").innerHTML = "SCORE :" + max;

    }



}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//timer///

var count = 1;

function timer(x) {
    if (count == 1) {
        count++;
        var interval = setInterval(myfunction, 1000);
    }
    if (count == 3) {

        count++;
        var interval2 = setInterval(myfunction2, 1000);
    }

    function myfunction() {
        document.getElementById("timer").innerHTML = x--;

        if (x == 0 || ind_player_score_team1[9].includes(0) || ind_player_score_team1[9].length == 6) {
            clearInterval(interval);
            document.getElementById("bat1").disabled = true;
            document.getElementById("bat2").disabled = false;
        }


    }

    function myfunction2() {
        document.getElementById("timer").innerHTML = x--;

        if (x == 0 || ind_player_score_team2[9].includes(0) || ind_player_score_team2[9].length == 6 || (total_score_team1 < total_score_team2)) {
            clearInterval(interval2);
            document.getElementById("bat2").disabled = true;
        }


    }
}
//////////////////////////////////////////////////////////////////////////////