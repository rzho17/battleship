const Gameboard = require("../gameboardClass");

const Ship = require("../shipClass");

const destroyer = new Ship(4, 0, false);
const patrol = new Ship(2, 0, false);
const board = new Gameboard();

test("board length", () => {
  expect(board.createBoard()[0].length).toBe(10);
});
test("expect []", () => {
  expect(board.createBoard()[1][1]).toBe("[]");
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

test("take coord on gameboard and returns hit number", () => {
  board.receiveAttack([9, 1]);

  expect(destroyer.hits).toBe(1);
});

test("take coord on gameboard and expects hit icon", () => {
  // board.receiveAttack([9, 1]);

  expect(board.board[9][1]).toBe("x");
});

test("receive attack on a hit part returns invalid move", () => {
  expect(board.receiveAttack([9, 1])).toBe("invalid move");
});

test("take coord on gameboard and returns hit number", () => {
  board.receiveAttack([9, 2]);

  expect(destroyer.hits).toBe(2);
});

test("take coord on gameboard and expects hit icon", () => {
  // board.receiveAttack([9, 1]);
  // console.log(board.board);
  expect(board.board[9][2]).toBe("x");
});

test("take coord on gameboard and returns hit number", () => {
  board.receiveAttack([9, 3]);

  expect(destroyer.hits).toBe(3);
});

test("take coord on gameboard and returns hit number", () => {
  board.receiveAttack([9, 4]);

  expect(destroyer.hits).toBe(4);
});

test("check if ship is sunk = true", () => {
  expect(destroyer.sunk).toBeTruthy();
});
