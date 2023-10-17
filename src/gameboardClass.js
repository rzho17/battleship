// const Ship = require("./shipClass");
import Ship from "./shipClass.js";

class Gameboard {
  constructor() {
    this.board = this.createBoard();
  }

  createBoard() {
    const board = [];
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push(null);
      }
      board.push(row);
    }
    return board;
  }

  checkShip(ship, coord, position) {
    const row = coord[0];
    const col = coord[1];
    const validPositionX = 10 - ship.length >= col;
    const validPositionY = 10 - ship.length >= row;

    let result = false;

    // if (
    //   (position === "x" && !validPositionX) ||
    //   (position === "y" && !validPositionY)
    // ) {
    //   result === true;
    //   // console.log("redirect");
    //   // return result;
    // }

    if (position === "x" && validPositionX) {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[row][col + i] instanceof Ship) {
          result = true;
        }
      }
    }

    if (position === "y" && validPositionY) {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[row + i][col] instanceof Ship) {
          result = true;
        }
      }
    }

    console.log(
      `i will place ${ship.length} @ [${coord}] Position ${position}`
    );

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

      // console.log(this.board);
    }

    if (currentShip === null) {
      this.board[row][col] = "o";
    }

    if (currentShip === "x") {
      return "invalid move";
    }
  }

  findValidPosition(ship, coord, position) {
    const row = coord[0];
    const col = coord[1];
    const validPositionX = 10 - ship.length >= col;
    const validPositionY = 10 - ship.length >= row;

    let result = false;

    if (
      (position === "x" && !validPositionX) ||
      (position === "y" && !validPositionY)
    ) {
      // console.log("redirect");
      // return result;
      result = true;
    }

    return result;
  }

  allShipsSunk() {
    let winCondition = true;

    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] instanceof Ship) {
          winCondition = false;
          // return winCondition;
        }
      }
    }
    return winCondition;
  }
}

export default Gameboard;
// module.exports = Gameboard;
