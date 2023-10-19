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

    // console.log(
    //   `i will place ${ship.length} @ [${coord}] Position ${position}`
    // );

    return result;
  }

  placeShip(ship, coord, position) {
    const row = coord[0];
    const col = coord[1];
    const validPositionX = 10 - ship.length >= col;
    const validPositionY = 10 - ship.length >= row;

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

    if (currentShip instanceof Ship) {
      currentShip.isHit();

      if (currentShip.hits === currentShip.length) {
        currentShip.isSunk();
      }

      this.board[row][col] = "x";
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
        }
      }
    }
    return winCondition;
  }
}

export default Gameboard;
