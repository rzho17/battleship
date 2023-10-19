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

const setAxis = (position) => {
  position = position === "x" ? "y" : "x";

  return position;
};

const setShipGridHelper = (user, coord, position) => {
  user.placeShip(user.shipHolder.shift(), coord, position);

  updateGrid(user.gameBoard.board, "initialBoard");

  if (user.shipHolder.length < 1) {
    closeWelcome(user);
  }
};

const setShipHoverHelperX = (ship, grid, color) => {
  const currentShip = ship.shipHolder[0];
  let xPosition = grid.dataset.gridPosition[0];

  let yPosition = grid.dataset.gridPosition[1];

  for (let i = 0; i < currentShip.length; i++) {
    yPosition = parseInt(yPosition);

    let specificGrid = document.querySelector(
      `.initialBoard [data-grid-position="${xPosition}${yPosition}"]`
    );

    if (specificGrid.classList.contains("ship")) {
      specificGrid.style.backgroundColor = "#d74949";
    } else {
      specificGrid.style.backgroundColor = color;
    }

    if (!(10 - currentShip.length < grid.dataset.gridPosition[1])) {
      yPosition += 1;
    }
    grid.addEventListener("mouseout", () => {
      const allGrids = document.querySelectorAll(" .ship");
      allGrids.forEach((grid) => {
        grid.style.backgroundColor = "#ffaf2e";
      });
    });
  }
};

const setShipHoverHelperY = (ship, grid, color) => {
  const currentShip = ship.shipHolder[0];
  let xPosition = grid.dataset.gridPosition[0];

  let yPosition = grid.dataset.gridPosition[1];

  for (let i = 0; i < currentShip.length; i++) {
    xPosition = parseInt(xPosition);

    let specificGrid = document.querySelector(
      `.initialBoard [data-grid-position="${xPosition}${yPosition}"]`
    );

    if (specificGrid.classList.contains("ship")) {
      specificGrid.style.backgroundColor = "#d74949";
    } else {
      specificGrid.style.backgroundColor = color;
    }

    if (!(10 - currentShip.length < grid.dataset.gridPosition[0])) {
      xPosition += 1;
    }

    grid.addEventListener("mouseout", () => {
      const allGrids = document.querySelectorAll(" .ship");
      allGrids.forEach((grid) => {
        grid.style.backgroundColor = "#ffaf2e";
      });
    });
  }
};

const setShipHoverX = (user, position, grid) => {
  //try changing this to be mouse over the initial grid, we might not get the error for things out of bound

  const mouseOverX = () => {
    setShipHoverHelperX(user, grid, "#49d76d");
  };

  const mouseOverY = () => {
    setShipHoverHelperY(user, grid, "#49d76d");
  };

  if (position === "x") mouseOverX();

  if (position === "y") mouseOverY();
};

const setShipHoverY = (user, position, grid) => {
  const mouseOutX = () => {
    setShipHoverHelperX(user, grid, "#37323e");
  };
  const mouseOutY = () => {
    setShipHoverHelperY(user, grid, "#37323e");
  };

  if (position === "x") mouseOutX();

  if (position === "y") mouseOutY();
};

const closeWelcome = (user) => {
  const loadScreen = document.querySelector(".loadContainer");
  loadScreen.style.display = "none";
  updateGrid(user.gameBoard.board, "playerBoard");
};

const updateDisplayShip = (user) => {
  const displayShip = document.querySelector(".displayShip");

  if (user.shipHolder.length > 0) {
    displayShip.innerText = `Place your: ${user.shipHolder[0].name}`;
  }
};
const setShipGrid = (user) => {
  const initialGrid = document.querySelectorAll(".initialBoard .gridSquare");
  const rotateBtn = document.querySelector(".rotateBtn");

  let position = "x";

  rotateBtn.addEventListener("click", () => {
    position = setAxis(position, user);
  });

  //goal for tomorrow set the position to switch each time

  initialGrid.forEach((grid) => {
    grid.addEventListener("click", (e) => {
      if (user.shipHolder.length > 0) {
        const coord = getCoord(e.target.dataset.gridPosition);
        const currentShip = user.shipHolder[0];
        const xValid = 10 - currentShip.length >= coord[1];
        const yValid = 10 - currentShip.length >= coord[0];
        const shipPositionValid =
          user.gameBoard.checkShip(currentShip, coord, position) === false;

        //need to set a tracker for when currentShip length = 0
        //once that condition is met, the welcome screen will close and the game will begin

        if (position === "x" && xValid && shipPositionValid) {
          setShipGridHelper(user, coord, position);
          updateDisplayShip(user);
        }

        if (position === "y" && yValid && shipPositionValid) {
          setShipGridHelper(user, coord, position);
          updateDisplayShip(user);
        }
      }
    });

    grid.addEventListener("mouseover", () => {
      if (user.shipHolder.length > 0) {
        setShipHoverX(user, position, grid);
      }
    });
    grid.addEventListener("mouseout", () => {
      if (user.shipHolder.length > 0) {
        setShipHoverY(user, position, grid);
      }
    });
  });
};

export const welcomeScreen = (player) => {
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
  displayShip.innerText = `Place your: ${player.shipHolder[0].name}`;

  const rotateBtn = document.createElement("button");
  rotateBtn.className = "rotateBtn";
  rotateBtn.innerText = "Rotate Ship";

  const initialBoard = document.createElement("div");
  initialBoard.className = "gameBoard initialBoard";

  makeGrid(initialBoard);
  loadInfo.append(loadTitle, displayShip, rotateBtn, initialBoard);

  loadContainer.append(loadInfo);

  main.append(loadContainer);

  setShipGrid(player);
};

export const winnerScreen = (winner) => {
  const loadContainer = document.querySelector(".loadContainer");
  loadContainer.style.display = "flex";
  const loadInfo = document.querySelector(".loadInfo");
  loadInfo.innerHTML = "";

  const winnerTitle = document.createElement("h2");
  winnerTitle.innerText = winner;
  winnerTitle.className = "loadTitle";
  const playAgain = document.createElement("button");
  playAgain.innerText = "Play Again?";
  playAgain.className = "playAgainBtn";

  loadInfo.append(winnerTitle, playAgain);
};

export const getCoord = (str) => {
  const xValue = parseInt(str[0]);
  const yValue = parseInt(str[1]);

  return [xValue, yValue];
};

export const getGridPosition = (arr, user) => {
  const gridSquare = document.querySelectorAll(`.${user} .gridSquare`);

  gridSquare.forEach((item) => {
    item.addEventListener("click", (e) => {
      const coord = getCoord(e.target.dataset.gridPosition);
      const xValue = coord[0];
      const yValue = coord[1];

      if (arr[xValue][yValue] instanceof Ship) {
        e.target.style.backgroundColor = "#ffaf2e";
      }
      if (arr[xValue][yValue] === null) {
        e.target.style.backgroundColor = "#858486";
      }

      updateGrid(arr, user);
    });
  });
};

const updateGridHelper = (x, y, colour, user) => {
  const specificGrid = document.querySelector(
    `.${user} [data-grid-position="${x}${y}"]`
  );

  specificGrid.classList.add("ship");

  specificGrid.style.backgroundColor = colour;
};

export const updateGrid = (arr, user) => {
  //should go through the array to check if each element in the array and update the grid accordingly
  //if an element in the array is a ship/x/o, the board should reflect the changes
  //step 1: go through the array
  //make the item in the array match with each digit in the board
  //step 2: update the board

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (user === "initialBoard" || user === "playerBoard") {
        if (arr[i][j] instanceof Ship) {
          updateGridHelper([i], [j], "#ffaf2e", user);
        }
        if (arr[i][j] === "x") {
          updateGridHelper([i], [j], "#d74949", user);
        } else if (arr[i][j] === "o") {
          updateGridHelper([i], [j], "#858486", user);
        }
      } else {
        if (arr[i][j] === "x") {
          updateGridHelper([i], [j], "#d74949", user);
        } else if (arr[i][j] === "o") {
          updateGridHelper([i], [j], "#858486", user);
        }
      }
    }
  }
};

export default makeGrid;
