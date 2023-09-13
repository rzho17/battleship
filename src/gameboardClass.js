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

  placeShip(ship, coord, position) {
    const row = coord[0];
    const col = coord[1];

    if (position === "x") {
      for (let i = 0; i < ship.length; i++) {
        this.board[row][col + i] = ship.length;
      }
    }

    if (position === "y") {
      for (let i = 0; i < ship.length; i++) {
        this.board[row + i][col] = ship.length;
      }
    }

    console.log(this.board);
    return this.board[coord[0]][coord[1]];
  }
}

module.exports = Gameboard;
