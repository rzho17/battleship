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
  }
}

export default Player;
