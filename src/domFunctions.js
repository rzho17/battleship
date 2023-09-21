import Ship from "./shipClass";

const makeGrid = (board) => {
  let counter = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const gridSquare = document.createElement("div");
      board.appendChild(gridSquare);
      gridSquare.className = "gridSquare";
      gridSquare.dataset.gridPosition = `${counter}${j}`;
    }
    counter++;
  }
};

const initialLoad = () => {
  const main = document.querySelector("main");
  const loadContainer = document.createElement("div");
  loadContainer.className = "loadContainer";

  const loadInfo = document.createElement("div");
  loadInfo.className = "loadInfo";

  const loadTitle = document.createElement("h2");
  loadTitle.className = "loadTitle";
  loadTitle.innerText = "Let's play Battleship!";

  const displayShip = document.createElement("div");
  displayShip.className = "displayShip";
  displayShip.innerText = "Carrier";

  const rotateBtn = document.createElement("button");
  rotateBtn.className = "rotateBtn";
  rotateBtn.innerText = "Rotate Ship";

  const initialBoard = document.createElement("div");
  initialBoard.className = "gameBoard initialBoard";

  makeGrid(initialBoard);
  loadInfo.append(loadTitle, displayShip, rotateBtn, initialBoard);

  loadContainer.append(loadInfo);

  main.append(loadContainer);
};

const getCoord = (str) => {
  const xValue = parseInt(str[0]);
  const yValue = parseInt(str[1]);
  //   console.log(str[0], str[1]);

  return [xValue, yValue];
};

export const getGridPosition = (arr) => {
  const gridSquare = document.querySelectorAll(".gridSquare");

  gridSquare.forEach((item) => {
    item.addEventListener("click", (e) => {
      //   e.target.dataset.gridPosition;
      //   console.log(e.target.dataset.gridPosition);
      updateGrid(arr, getCoord(e.target.dataset.gridPosition), e);
      //   console.log(e.target.dataset.gridPosition);
      //   console.log(getCoord(e.target.dataset.gridPosition));
    });
  });
};

const updateGridHelper = (x, y, colour) => {
  const specificGrid = document.querySelector(
    `[data-grid-position="${x}${y}"]`
  );

  console.log(specificGrid);

  specificGrid.style.backgroundColor = colour;
};
const updateGrid = (arr, coord, e) => {
  const board = document.querySelector(".playerBoard");
  const xValue = coord[0];
  const yValue = coord[1];

  //should go through the array to check if each element in the array and update the grid accordingly
  //if an element in the array is a ship/x/o, the board should reflect the changes
  //step 1: go through the array
  //make the item in the array match with each digit in the board
  //step 2: update the board
  const gridSquare = document.querySelectorAll(".gridSquare");
  const datasetNumber = e.target.dataset.gridPosition;

  //   console.log(datasetNumber);

  //   console.log(arr);

  if (arr[xValue][yValue] instanceof Ship) {
    e.target.style.backgroundColor = "red";
  }
  if (arr[xValue][yValue] === null) {
    e.target.style.backgroundColor = "grey";
  }

  //   gridSquare.forEach(square => {
  //     if(arr[xValue][yValue] === "x"){

  //     }
  //   })

  //   if (arr[xValue][yValue] === "o") {
  //     e.target.style.backgroundColor = "grey";
  //   }
  //   if (arr[xValue][yValue] === "x") {
  //     e.target.style.backgroundColor = "red";
  //   }

  const specificGrid = document.querySelector('[data-grid-position="18"]');

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "x") {
        // e.target.style.backgroundColor = "red";
        updateGridHelper([i], [j], "red");
      } else if (arr[i][j] === "o") {
        updateGridHelper([i], [j], "grey");
      }
    }
  }
};

// initialLoad();

export default makeGrid;
