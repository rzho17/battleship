import makeGrid, { getGridPosition } from "./domFunctions";
import Player from "./playerClass";

const playerBoard = document.querySelector(".playerBoard");
const computerBoard = document.querySelector(".computerBoard");

makeGrid(playerBoard);
makeGrid(computerBoard);

const player = new Player();

player.placeShip(player.carrier, [0, 0], "x");
player.receiveAttack([0, 0]);
player.receiveAttack([0, 1]);
player.receiveAttack([0, 2]);
player.receiveAttack([8, 0]);
getGridPosition(player.gameBoard.board);
