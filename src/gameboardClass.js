const Ship = require("./shipClass");

class Gameboard {
  constructor() {
    this.board = this.createBoard();
  }
  createBoard() {
    const board = [];
    for (let i = 0; i < 10; i++) {
      const row = []; // Create a new row for each iteration
      for (let j = 0; j < 10; j++) {
        row.push("x");
      }
      board.push(row); // Add the row to the board
    }
    return board;
  }

  checkShip(ship, coord, position) {
    const row = coord[0];
    const col = coord[1];
    let result = false;

    if (position === "x") {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[row][col + i] instanceof Ship) {
          result = true;
        }
      }
    }
    if (position === "y") {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[row + i][col] instanceof Ship) {
          result = true;
        }
      }
    }

    // console.log("heyhey");
    return result;
  }

  placeShip(ship, coord, position) {
    const row = coord[0];
    const col = coord[1];
    const validPositionX = 10 - ship.length >= col;
    const validPositionY = 10 - ship.length >= row;

    // ship = 4
    // col = 7
    // length = 10
    // if 10 - ship <= col = valid

    // if (this.board[row][col] !== "x") {
    // this.checkShip(ship, coord);
    // }

    // if (this.checkShip(ship, coord)) {
    //   // return this.board;
    // }

    const result = this.checkShip(ship, coord, position);
    console.log(result);

    if (result === false) {
      if (position === "x" && validPositionX) {
        for (let i = 0; i < ship.length; i++) {
          this.board[row][col + i] = ship;
        }
      }

      if (position === "y" && validPositionY) {
        for (let i = 0; i < ship.length; i++) {
          this.board[row + i][col] = ship;
        }
      }
    }

    // console.log(this.board);
    // return this.board;
  }
}

module.exports = Gameboard;
