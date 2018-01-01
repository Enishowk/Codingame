var inputs = readline().split(" ");
var W = parseInt(inputs[0]); // number of columns.
var H = parseInt(inputs[1]); // number of rows.
var map = [];
printErr("W, H", W, H);
for (var i = 0; i < H; i++) {
  var LINE = readline(); // represents a line in the grid and contains W integers. Each integer represents one room of a given type.
  map.push(LINE.split(" "));
}
var EX = parseInt(readline()); // the coordinate along the X axis of the exit (not useful for this first mission, but must be read).

// game loop
while (true) {
  var inputs = readline().split(" ");
  var XI = parseInt(inputs[0]);
  var YI = parseInt(inputs[1]);
  var POS = inputs[2];
  var coord = "";

  switch (map[YI][XI]) {
    case "1":
    case "3":
    case "7":
    case "8":
    case "9":
    case "12":
    case "13":
      coord = `${XI} ${YI + 1}`;
      break;
    case "2":
      if (POS === "RIGHT") {
        coord = `${XI - 1} ${YI}`;
      }
      if (POS === "LEFT") {
        coord = `${XI + 1} ${YI}`;
      }
      break;
    case "4":
      if (POS === "TOP") {
        coord = `${XI - 1} ${YI}`;
      }
      if (POS === "RIGHT") {
        coord = `${XI} ${YI + 1}`;
      }
      break;
    case "5":
      if (POS === "TOP") {
        coord = `${XI + 1} ${YI}`;
      }
      if (POS === "LEFT") {
        coord = `${XI} ${YI + 1}`;
      }
      break;
    case "6":
      if (POS === "RIGHT") {
        coord = `${XI - 1} ${YI}`;
      }
      if (POS === "LEFT") {
        coord = `${XI + 1} ${YI}`;
      }
      break;
    case "10":
      coord = `${XI - 1} ${YI}`;
      break;
    case "11":
      coord = `${XI + 1} ${YI}`;
      break;
    default:
      coord = "0 0";
  }

  print(coord);
}
