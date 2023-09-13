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
  expect(board.board[9][1]).toBe(4);
});

test("place ship x axis", () => {
  expect(board.board[9][2]).toBe(4);
});
test("place ship x axis", () => {
  expect(board.board[9][3]).toBe(4);
});
test("place ship x axis", () => {
  expect(board.board[9][4]).toBe(4);
});

test("place ship x axis: 0 index", () => {
  board.placeShip(patrol, [8, 0], "x");
  expect(board.board[8][0]).toBe(2);
});

test("place ship y axis", () => {
  board.placeShip(patrol, [0, 0], "y");
  expect(board.board[0][0]).toBe(2);
});

// test("place ship y axis: 0 index", () => {
//   board.placeShip(patrol, [1, 2], "y");
//   expect(board.board[1][2]).toBe(2);
// });

// test("place ship x axis: out of bounds", () => {
//   board.placeShip(destroyer, [9, 9], "x");
//   console.log(board.board);
//   expect(board.board[9][9]).toBe("x");
// });

// test("place ship x axis", () => {
//   expect(board.placeShip(patrol, [8, 0], "x")).toBe(2);
// });
// test("place ship x axis", () => {
//   expect(board.placeShip(patrol, [8, 1], "x")).toBe(2);
// });

// test("place ship y axis", () => {
//   expect(board.placeShip(patrol, [1, 0], "y")).toBe(2);
//   //   expect(newBoard[2][1]).toBe(4);
// });

// test("place ship y axis", () => {
//   expect(board.placeShip(patrol, [2, 0], "y")).toBe(2);

//   console.log(board.board);
//   //   expect(newBoard[2][1]).toBe(4);
// });
