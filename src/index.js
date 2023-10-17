import makeGrid, {
  getGridPosition,
  updateGrid,
  welcomeScreen,
  winnerScreen,
} from "./domFunctions";

import player from "./gameControl";
import gameFlow from "./gameControl";
// import Player from "./playerClass";

// const playerBoard = document.querySelector(".playerBoard");
// const computerBoard = document.querySelector(".computerBoard");

// makeGrid(playerBoard);
// makeGrid(computerBoard);

// console.log(player);

// const player = new Player();

welcomeScreen(gameFlow.player);
// winnerScreen("Player");

// player.placeShip(player.carrier, [0, 0], "x");
// player.placeShip(player.destroyer, [2, 5], "x");
// player.placeShip(player.submarine, [4, 0], "x");
// player.placeShip(player.battleship, [6, 0], "x");
// player.placeShip(player.patrolBoat, [8, 1], "x");
// player.receiveAttack([0, 0]);
// player.receiveAttack([0, 1]);
// player.receiveAttack([0, 2]);
// player.receiveAttack([8, 0]);

// computer.placeShip(computer.carrier, [1, 0], "x");
// computer.placeShip(computer.destroyer, [3, 5], "x");
// computer.placeShip(computer.submarine, [5, 0], "x");
// computer.placeShip(computer.battleship, [3, 0], "x");
// computer.placeShip(computer.patrolBoat, [9, 1], "x");

// updateGrid(computer.gameBoard.board, "computerBoard");
// getGridPosition(computer.gameBoard.board, "computerBoard");

// updateGrid(player.gameBoard.board, "playerBoard");
// getGridPosition(player.gameBoard.board, "playerBoard");
