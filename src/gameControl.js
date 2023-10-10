import makeGrid, { getCoord, getGridPosition } from "./domFunctions";

// import { getGridPosition } from "./domFunctions";
import Player from "./playerClass";

// console.log(player);

const setBoard = () => {
  const playerBoard = document.querySelector(".playerBoard");
  const computerBoard = document.querySelector(".computerBoard");
  makeGrid(playerBoard);
  makeGrid(computerBoard);
};

const gameFlow = (() => {
  setBoard();
  const checkWin = () => {
    if (gameFlow.computer.gameBoard.allShipsSunk() === true) {
      return console.log("player win");
    }
    // if (gameFlow.player.gameBoard.allShipsSunk() === true) {
    //   return console.log("computer win");
    // }

    return console.log("nno winner yet");
  };

  const player = new Player();
  const computer = new Player();
  computer.placeShip(computer.shipHolder[0], [1, 2], "x");
  computer.placeShip(computer.shipHolder[1], [2, 2], "x");
  computer.placeShip(computer.shipHolder[2], [3, 2], "x");
  computer.placeShip(computer.shipHolder[3], [4, 2], "x");
  computer.placeShip(computer.shipHolder[4], [5, 2], "x");

  const playerAttack = () => {
    const playerBoard = document.querySelectorAll(
      ".computerBoard .gridSquare "
    );

    playerBoard.forEach((grid) => {
      grid.addEventListener("click", (e) => {
        const coord = getCoord(e.target.dataset.gridPosition);
        // console.log(computer.gameBoard.board);
        // console.log(computer.gameBoard.allShipsSunk());
        // console.log(coord);
        computer.receiveAttack(coord);
        getGridPosition(computer.gameBoard.board, "computerBoard");
        checkWin();
      });
    });
  };

  //   getGridPosition(computer.gameBoard.board, "computerBoard");

  //   console.log(computer.gameBoard.board);

  playerAttack();
  const computerAttack = () => {};
  //   console.log(getGridPosition(computer.gameBoard.board, "computerBoard"));

  //   console.log(getGridPosition(computer.gameBoard.board, "computerBoard"));
  getGridPosition(computer.gameBoard.board, "computerBoard");
  //   computer.receiveAttack([1, 2], "x");
  //   console.log(computer.gameBoard.board);
  return { player, computer };
})();
// console.log("this is working");

export default gameFlow;
