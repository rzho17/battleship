const Ship = require("./shipClass");

class Gameboard {
  constructor() {
    this.board = this.createBoard();
  }
  createBoard() {
    const board = [];
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push("[]");
      }
      board.push(row);
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

    const isValidPosition = this.checkShip(ship, coord, position);

    if (isValidPosition === false) {
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
  }

  receiveAttack(coord) {
    const row = coord[0];
    const col = coord[1];
    let currentShip = this.board[row][col];
    // let result = false;

    // console.low(row);

    if (currentShip instanceof Ship) {
      currentShip.isHit();

      if (currentShip.hits === currentShip.length) {
        currentShip.isSunk();
      }

      this.board[row][col] = "x";

      console.log(this.board);
    }

    if (currentShip === "x") {
      return "invalid move";
    }

    // console.log(board);
    // return result;
  }
}

module.exports = Gameboard;
