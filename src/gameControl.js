import makeGrid, {
  getCoord,
  getGridPosition,
  updateGrid,
  welcomeScreen,
  winnerScreen,
} from "./domFunctions";

// import { getGridPosition } from "./domFunctions";
import Player from "./playerClass";

// console.log(player);

const setBoard = () => {
  const playerBoard = document.querySelector(".playerBoard");
  const computerBoard = document.querySelector(".computerBoard");

  playerBoard.innerHTML = "";
  computerBoard.innerHTML = "";
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

  const coordArrAtt = [
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

  return { coordArr, coordArrAtt };
})();

const checkCoordArr = (num) => {
  const coord = coordHolder.coordArr.splice(num, 1);

  return coord;
};

const checkCoordAtt = (num) => {
  const coord = coordHolder.coordArrAtt.splice(num, 1);

  return coord;
};

const getRandomCoordAtt = () => {
  const randomNum = Math.floor(Math.random() * coordHolder.coordArrAtt.length);
  const coord = checkCoordAtt(randomNum).flat(1);
  return coord;
};

const getRandomCoord = () => {
  const randomNum = Math.floor(Math.random() * coordHolder.coordArr.length);
  const coord = checkCoordArr(randomNum).flat(1);
  return coord;
};

const getRandomAxis = () => {
  const randomNum = Math.floor(Math.random() * 2);

  if (randomNum === 1) {
    return "x";
  } else {
    return "y";
  }
};

const computerAttack = () => {
  //   const randomNum = Math.floor(Math.random() * coordHolder.coordArr.length);
  //   const coord = checkCoordArr(randomNum).flat(1);

  //have an array with all the possible coords
  //get a random number from 0 to current array length
  //use that number for the coord
  //remove that number from the array list

  players.player.receiveAttack(getRandomCoordAtt());

  updateGrid(players.player.gameBoard.board, "playerBoard");
  checkWin();
};

const checkWin = () => {
  if (players.computer.gameBoard.allShipsSunk() === true) {
    // return console.log("player win");
    winnerScreen("player win");
    playAgain();
  }
  if (players.player.gameBoard.allShipsSunk() === true) {
    // return console.log("computer win");
    winnerScreen("computer win");
    playAgain();
  }

  return console.log("nno winner yet");
};

const playAgain = () => {
  const playAgainBtn = document.querySelector(".playAgainBtn");
  //   const playerBoard = document.querySelector(".playerBoard");
  //   const computerBoard = document.querySelector(".computerBoard");
  const loadContainer = document.querySelector(".loadContainer");
  const player = new Player();
  const computer = new Player();
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

  playAgainBtn.addEventListener("click", () => {
    loadContainer.remove();
    // playerBoard.innerHTML = "";
    // computerBoard.innerHTML = "";
    players.player = player;
    players.computer = computer;
    coordHolder.coordArr = [...coordArr];
    coordHolder.coordArrAtt = [...coordArr];

    console.log(players.player.gameBoard.board);
    welcomeScreen(players.player);
    gameFlow();
  });
};

export const players = (() => {
  const player = new Player();
  const computer = new Player();

  return { player, computer };
})();

const gameFlow = () => {
  setBoard();

  //   const player = new Player();
  //   player.placeShip(player.shipHolder[0], [1, 2], "x");
  //   player.placeShip(player.shipHolder[0], [1, 2], "x");
  //   player.placeShip(player.shipHolder[1], [2, 2], "x");
  //   player.placeShip(player.shipHolder[2], [3, 2], "x");
  //   player.placeShip(player.shipHolder[3], [4, 2], "x");
  //   player.placeShip(player.shipHolder[4], [5, 2], "x");

  //   const computer = new Player();

  const computerPlaceShip = () => {
    while (players.computer.shipHolder.length > 0) {
      const ship = players.computer.shipHolder[0];
      const randomCoord = getRandomCoord();
      const randomAxis = getRandomAxis();

      //   console.log(ship.length);
      if (
        players.computer.gameBoard.checkShip(ship, randomCoord, randomAxis) ===
          false &&
        players.computer.gameBoard.findValidPosition(
          ship,
          randomCoord,
          randomAxis
        ) === false
      ) {
        players.computer.placeShip(ship, randomCoord, randomAxis);

        players.computer.shipHolder.shift();
      }
    }

    // console.log(computer.gameBoard.board);

    //get a coord from the coord holder
    //check if it is a valid position to place a ship
    //if not keep grabbing a coord from the coord holder until a valid position is found

    //randomly switch between x and y coord to place ships
  };

  computerPlaceShip();
  //   updateGrid(players.player, "playerBoard");
  //   computer.placeShip(computer.shipHolder[0], [1, 2], "x");
  //   computer.placeShip(computer.shipHolder[1], [2, 2], "x");
  //   computer.placeShip(computer.shipHolder[2], [3, 2], "x");
  //   computer.placeShip(computer.shipHolder[3], [4, 2], "x");
  //   computer.placeShip(computer.shipHolder[4], [5, 2], "x");

  const playerAttack = () => {
    const playerBoard = document.querySelectorAll(
      ".computerBoard .gridSquare "
    );

    playerBoard.forEach((grid) => {
      grid.addEventListener("click", (e) => {
        const coord = getCoord(e.target.dataset.gridPosition);
        const checkGrid = e.target.classList.contains("ship");

        // console.log(e.target.classList.contains("ship"));

        if (!checkGrid) {
          players.computer.receiveAttack(coord);
          // console.log(computer.gameBoard.board);
          console.log(coordHolder.coordArr);
          // getGridPosition(computer.gameBoard.board, "computerBoard");

          setTimeout(() => {
            computerAttack();
          }, 150);
          checkWin();
        }
        // console.log(computer.gameBoard.board);
        // console.log(computer.gameBoard.allShipsSunk());
        // console.log(coord);
        // computer.receiveAttack(coord);
        // // getGridPosition(computer.gameBoard.board, "computerBoard");
        // computerAttack();
        // checkWin();
      });
    });
  };

  //   getGridPosition(computer.gameBoard.board, "computerBoard");

  //   console.log(computer.gameBoard.board);

  playerAttack();

  //   console.log(getGridPosition(computer.gameBoard.board, "computerBoard"));

  //   console.log(getGridPosition(computer.gameBoard.board, "computerBoard"));

  getGridPosition(players.computer.gameBoard.board, "computerBoard");
  //   computer.receiveAttack([1, 2], "x");
  //   console.log(computer.gameBoard.board);

  //   playAgain();
  //   return { player, computer };
};

// console.log("this is working");

export default gameFlow;
