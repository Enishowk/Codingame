var n = parseInt(readline()); // the number of cards for player 1
var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "1", "J", "Q", "K", "A"];

var player1 = [];
var player2 = [];
for (var i = 0; i < n; i++) {
  var cardp1 = readline(); // the n cards of player 1
  player1.push(cardp1);
}
var m = parseInt(readline()); // the number of cards for player 2
for (var i = 0; i < m; i++) {
  var cardp2 = readline(); // the m cards of player 2
  player2.push(cardp2);
}

var turn = 0;
var pat = false;
while (true) {
  turn++;
  if (player1.length === 0 || player2.length === 0) {
    pat = true;
    break;
  }
  var cardp1Value = cards.indexOf(player1[0].charAt(0));
  var cardp2Value = cards.indexOf(player2[0].charAt(0));

  // player 1 gagne
  if (cardp1Value > cardp2Value) {
    player1.push(player1[0], player2[0]);
    player1.shift();
    player2.shift();
  }

  // player 2 gagne
  if (cardp1Value < cardp2Value) {
    player2.push(player1[0], player2[0]);
    player1.shift();
    player2.shift();
  }

  // ex aequo
  if (cardp1Value === cardp2Value) {
    var tempCardp1 = player1.slice(0, 4);
    var tempCardp2 = player2.slice(0, 4);

    player1.splice(0, 4);
    player2.splice(0, 4);

    if (player1.length === 0 || player2.length === 0) {
      pat = true;
      break;
    }
    var cardp1Value = cards.indexOf(player1[0].charAt(0));
    var cardp2Value = cards.indexOf(player2[0].charAt(0));
    if (cardp1Value > cardp2Value) {
      player1 = player1.concat(tempCardp1, player1[0], tempCardp2, player2[0]);
      player1.shift();
      player2.shift();
    }
    if (cardp1Value < cardp2Value) {
      player2 = player2.concat(tempCardp1, player1[0], tempCardp2, player2[0]);
      player1.shift();
      player2.shift();
    }
    // TODO : Recursive
    if (cardp1Value === cardp2Value) {
      var temp2Cardp1 = player1.slice(0, 4);
      var temp2Cardp2 = player2.slice(0, 4);
      player1.splice(0, 4);
      player2.splice(0, 4);

      if (player1.length === 0 || player2.length === 0) {
        pat = true;
        break;
      }
      var cardp1Value = cards.indexOf(player1[0].charAt(0));
      var cardp2Value = cards.indexOf(player2[0].charAt(0));
      if (cardp1Value > cardp2Value) {
        player1 = player1.concat(
          tempCardp1,
          temp2Cardp1,
          player1[0],
          tempCardp2,
          temp2Cardp2,
          player2[0]
        );
        player1.shift();
        player2.shift();
      }
      if (cardp1Value < cardp2Value) {
        player2 = player2.concat(
          tempCardp1,
          temp2Cardp1,
          player1[0],
          tempCardp2,
          temp2Cardp2,
          player2[0]
        );
        player1.shift();
        player2.shift();
      }
      // TODO : Recursive
      if (cardp1Value === cardp2Value) {
        var temp3Cardp1 = player1.slice(0, 4);
        var temp3Cardp2 = player2.slice(0, 4);
        player1.splice(0, 4);
        player2.splice(0, 4);

        if (player1.length === 0 || player2.length === 0) {
          pat = true;
          break;
        }
        var cardp1Value = cards.indexOf(player1[0].charAt(0));
        var cardp2Value = cards.indexOf(player2[0].charAt(0));
        if (cardp1Value > cardp2Value) {
          player1 = player1.concat(
            tempCardp1,
            temp2Cardp1,
            temp3Cardp1,
            player1[0],
            tempCardp2,
            temp2Cardp2,
            temp3Cardp2,
            player2[0]
          );
          player1.shift();
          player2.shift();
        }
        if (cardp1Value < cardp2Value) {
          player2 = player2.concat(
            tempCardp1,
            temp2Cardp1,
            temp3Cardp1,
            player1[0],
            tempCardp2,
            temp2Cardp2,
            temp3Cardp2,
            player2[0]
          );
          player1.shift();
          player2.shift();
        }
      }
    }
  }

  if (player1.length === 0 || player2.length === 0) {
    break;
  }
}

if (pat) {
  print("PAT");
} else {
  print(player1.length > player2.length ? `1 ${turn}` : `2 ${turn}`);
}
