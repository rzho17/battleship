// const Gameboard = require("./gameboardClass");
// const Ship = require("./shipClass");
import Gameboard from "./gameboardClass.js";
import Ship from "./shipClass.js";

class Player {
  constructor(gameBoard, shipHolder) {
    this.gameBoard = new Gameboard();

    this.carrier = new Ship(5, 0, false, "Carrier");
    this.battleship = new Ship(4, 0, false, "Battleship");
    this.destroyer = new Ship(3, 0, false, "Destroyer");
    this.submarine = new Ship(3, 0, false, "Submarine");
    this.patrolBoat = new Ship(2, 0, false, "Patrol Boat");

    this.shipHolder = [
      this.carrier,
      this.battleship,
      this.destroyer,
      this.submarine,
      this.patrolBoat,
    ];
  }

  placeShip(ship, coord, position) {
    this.gameBoard.placeShip(ship, coord, position);
  }

  receiveAttack(coord) {
    this.gameBoard.receiveAttack(coord);
  }

  computerAttack() {
    const xCoord = Math.floor(Math.random() * 10);
    const yCoord = Math.floor(Math.random() * 10);

    if (
      this.gameBoard.board[xCoord][yCoord] !== "o" ||
      this.gameBoard.board[xCoord][yCoord] !== "x"
    ) {
      this.receiveAttack([xCoord, yCoord]);
    }

    // console.log(xCoord);
    // console.log(yCoord);
  }
}

// const player = new Player();
// const computer = new Player();

// player.placeShip(player.carrier, [0, 0], "y");
// player.placeShip(player.battleship, [6, 1], "x");

// computer.placeShip(computer.carrier, [0, 0], "x");
// computer.placeShip(computer.battleship, [1, 0], "x");
// computer.placeShip(computer.destroyer, [2, 0], "x");
// computer.placeShip(computer.submarine, [3, 0], "x");
// computer.placeShip(computer.patrolBoat, [4, 0], "x");

// while (computer.gameBoard.allShipsSunk() === false) {
//   computer.computerAttack();
// }

// console.log(player.gameBoard.board);
// console.log(computer.gameBoard.board);

// computer.gameBoard.createBoard();
// computer.gameBoard.placeShip(computer.carrier, [0, 0], "x");
// console.log(computer.gameBoard.board);

export default Player;
