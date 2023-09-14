const Gameboard = require("../gameboardClass");

const Ship = require("../shipClass");

const destroyer = new Ship(4, 0, false);
const patrol = new Ship(2, 0, false);
const board = new Gameboard();

test("board length", () => {
  expect(board.createBoard()[0].length).toBe(10);
});
test("expect x", () => {
  expect(board.createBoard()[1][1]).toBe("x");
});
test("place ship x axis", () => {
  board.placeShip(destroyer, [9, 1], "x");
  expect(board.board[9][1]).toBe(destroyer);
});

test("place ship x axis", () => {
  expect(board.board[9][2]).toBe(destroyer);
});
test("place ship x axis", () => {
  expect(board.board[9][3]).toBe(destroyer);
});
test("place ship x axis", () => {
  expect(board.board[9][4]).toBe(destroyer);
});

// test("place ship x axis: 0 index", () => {
//   board.placeShip(patrol, [8, 0], "x");
//   expect(board.board[8][0]).toBe(2);
// });

// test("place ship y axis", () => {
//   board.placeShip(patrol, [0, 0], "y");
//   expect(board.board[0][0]).toBe(2);
// });

test("place ship y axis: 0 index", () => {
  board.placeShip(patrol, [8, 0], "y");
  expect(board.board[8][0]).toBe(patrol);
});

test("return true if placed on another ship", () => {
  // board.placeShip(patrol, [8, 0], "y");
  expect(board.checkShip(patrol, [9, 5])).toBeFalsy();
});

test("do not place ship if there is ship in path", () => {
  board.placeShip(patrol, [6, 0], "y");
  console.log(board.board);
  expect(board.board[8][0]).toEqual({ hits: 0, length: 2, sunk: false });
});

test("do not place ship if there is ship in path", () => {
  board.placeShip(patrol, [9, 1], "x");
  console.log(board.board);
  expect(board.board[9][1]).toBe(destroyer);
});

// test("place ship on another ship ", () => {
//   board.placeShip(destroyer, [6, 0], "y");
//   console.log(board.board);
//   expect(board.board[6][0]).toBe("x");
// });

// test("place ship", () => {
//   board.placeShip(patrol, [3, 3], "y");
//   expect(board.board[3][3]).toBe(patrol);
// });

// test("place ship x axis: out of bounds", () => {
//   board.placeShip(destroyer, [9, 7], "x");
//   console.log(board.board);
//   expect(board.board[9][7]).toBe("x");
// });

// test("place ship y axis: out of bounds", () => {
//   board.placeShip(patrol, [9, 0], "y");
//   console.log(board.board);
//   expect(board.board[9][0]).toBe("x");
// });
