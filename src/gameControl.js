import makeGrid, {
  getCoord,
  getGridPosition,
  updateGrid,
} from "./domFunctions";

// import { getGridPosition } from "./domFunctions";
import Player from "./playerClass";

// console.log(player);

const setBoard = () => {
  const playerBoard = document.querySelector(".playerBoard");
  const computerBoard = document.querySelector(".computerBoard");
  makeGrid(playerBoard);
  makeGrid(computerBoard);
};

const coordHolder = (() => {
  const coordArr = [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [0, 7],
    [0, 8],
    [0, 9],
    [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [1, 7],
    [1, 8],
    [1, 9],
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [2, 6],
    [2, 7],
    [2, 8],
    [2, 9],
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 3],
    [3, 4],
    [3, 5],
    [3, 6],
    [3, 7],
    [3, 8],
    [3, 9],
    [4, 0],
    [4, 1],
    [4, 2],
    [4, 3],
    [4, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [4, 8],
    [4, 9],
    [5, 0],
    [5, 1],
    [5, 2],
    [5, 3],
    [5, 4],
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
    [6, 0],
    [6, 1],
    [6, 2],
    [6, 3],
    [6, 4],
    [6, 5],
    [6, 6],
    [6, 7],
    [6, 8],
    [6, 9],
    [7, 0],
    [7, 1],
    [7, 2],
    [7, 3],
    [7, 4],
    [7, 5],
    [7, 6],
    [7, 7],
    [7, 8],
    [7, 9],
    [8, 0],
    [8, 1],
    [8, 2],
    [8, 3],
    [8, 4],
    [8, 5],
    [8, 6],
    [8, 7],
    [8, 8],
    [8, 9],
    [9, 0],
    [9, 1],
    [9, 2],
    [9, 3],
    [9, 4],
    [9, 5],
    [9, 6],
    [9, 7],
    [9, 8],
    [9, 9],
  ];

  return { coordArr };
})();

const checkCoordArr = (num) => {
  const coord = coordHolder.coordArr.splice(num, 1);

  return coord;
};

const computerAttack = () => {
  const randomNum = Math.floor(Math.random() * coordHolder.coordArr.length);

  //have an array with all the possible coords
  //get a random number from 0 to current array length
  //use that number for the coord
  //remove that number from the array list

  //   console.log(randomNum);
  const coord = checkCoordArr(randomNum).flat(1);
  console.log(coord);
  gameFlow.player.receiveAttack(coord);

  updateGrid(gameFlow.player.gameBoard.board, "playerBoard");
};

const checkWin = () => {
  if (gameFlow.computer.gameBoard.allShipsSunk() === true) {
    return console.log("player win");
  }
  if (gameFlow.player.gameBoard.allShipsSunk() === true) {
    return console.log("computer win");
  }

  return console.log("nno winner yet");
};

const gameFlow = (() => {
  setBoard();

  const player = new Player();
  player.placeShip(player.shipHolder[0], [1, 2], "x");

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
        // getGridPosition(computer.gameBoard.board, "computerBoard");
        computerAttack();
        checkWin();
      });
    });
  };

  //   getGridPosition(computer.gameBoard.board, "computerBoard");

  //   console.log(computer.gameBoard.board);

  playerAttack();

  //   console.log(getGridPosition(computer.gameBoard.board, "computerBoard"));

  //   console.log(getGridPosition(computer.gameBoard.board, "computerBoard"));

  getGridPosition(computer.gameBoard.board, "computerBoard");
  //   computer.receiveAttack([1, 2], "x");
  //   console.log(computer.gameBoard.board);
  return { player, computer };
})();
// console.log("this is working");

export default gameFlow;
