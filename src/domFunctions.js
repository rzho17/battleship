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
  //   console.log(position);
  // setShipHover(user, position);

  return position;
};

const setShipGridHelper = (user, coord, position) => {
  user.placeShip(user.shipHolder.shift(), coord, position);

  updateGrid(user.gameBoard.board, "initialBoard");
};

// const checkShipGrid = (x, y) => {
//   let xPosition = x;
//   let yPosition = y;

//   for (let i = 0; i < currentShip.length; i++) {
//     yPosition = parseInt(yPosition);

//     let specificGrid = document.querySelector(
//       `.initialBoard [data-grid-position="${xPosition}${yPosition}"]`
//     );
//     yPosition += 1;

//     specificGrid.style.backgroundColor = color;
//   }
// };

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
      specificGrid.style.backgroundColor = "red";

      // grid.addEventListener("mouseout", () => {
      //   // for (let i = 0; i < currentShip.length; i++) {
      //   specificGrid.style.backgroundColor = "orange";
      //   // }
      // });
    } else {
      specificGrid.style.backgroundColor = color;
    }

    if (!(10 - currentShip.length < grid.dataset.gridPosition[1])) {
      yPosition += 1;
    }
    grid.addEventListener("mouseout", () => {
      const allGrids = document.querySelectorAll(" .ship");
      allGrids.forEach((grid) => {
        grid.style.backgroundColor = "orange";
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
      specificGrid.style.backgroundColor = "red";

      // grid.addEventListener("mouseout", () => {
      //   // for (let i = 0; i < currentShip.length; i++) {
      //   specificGrid.style.backgroundColor = "orange";
      //   // }
      // });
    } else {
      specificGrid.style.backgroundColor = color;
    }

    if (!(10 - currentShip.length < grid.dataset.gridPosition[0])) {
      xPosition += 1;
    }

    grid.addEventListener("mouseout", () => {
      const allGrids = document.querySelectorAll(" .ship");
      allGrids.forEach((grid) => {
        grid.style.backgroundColor = "orange";
      });
    });

    // if (specificGrid.classList.contains("ship")) {
    //   specificGrid.style.backgroundColor = "red";
    //   grid.addEventListener("mouseout", () => {
    //     specificGrid.style.backgroundColor = "orange";
    //   });
    // } else {
    //   specificGrid.style.backgroundColor = color;
    // }
    // xPosition += 1;

    // specificGrid.style.backgroundColor = color;
  }
};

const setShipHoverX = (user, position, grid) => {
  //try changing this to be mouse over the initial grid, we might not get the error for things out of bound

  const mouseOverX = () => {
    setShipHoverHelperX(user, grid, "blue");
  };

  const mouseOverY = () => {
    setShipHoverHelperY(user, grid, "blue");
  };

  if (position === "x") mouseOverX();

  if (position === "y") mouseOverY();
};

const setShipHoverY = (user, position, grid) => {
  const mouseOutX = () => {
    setShipHoverHelperX(user, grid, "white");
  };
  const mouseOutY = () => {
    setShipHoverHelperY(user, grid, "white");
  };

  if (position === "x") mouseOutX();

  if (position === "y") mouseOutY();
};

const setShipGrid = (user) => {
  const initialGrid = document.querySelectorAll(".initialBoard .gridSquare");
  const rotateBtn = document.querySelector(".rotateBtn");
  let position = "x";

  rotateBtn.addEventListener("click", () => {
    position = setAxis(position, user);
  });

  // initialGrid.forEach((grid) => {
  //   grid.addEventListener("mouseover", () => {
  //     setShipHoverX(user, position, grid);
  //   });
  //   grid.addEventListener("mouseout", () => {
  //     setShipHoverY(user, position, grid);
  //   });
  // });

  //goal for tomorrow set the position to switch each time
  initialGrid.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      setShipHoverX(user, position, grid);
    });
    grid.addEventListener("mouseout", () => {
      setShipHoverY(user, position, grid);
    });

    grid.addEventListener("click", (e) => {
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
      }

      if (position === "y" && yValid && shipPositionValid) {
        setShipGridHelper(user, coord, position);
      }
    });
  });
  //   console.log(initialGrid);
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
  displayShip.innerText = "Place your ship(change ship name)";

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

const getCoord = (str) => {
  const xValue = parseInt(str[0]);
  const yValue = parseInt(str[1]);
  //   console.log(str[0], str[1]);

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
        e.target.style.backgroundColor = "red";
      }
      if (arr[xValue][yValue] === null) {
        e.target.style.backgroundColor = "grey";
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
  //   console.log(specificGrid);

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
      if (arr[i][j] instanceof Ship) {
        updateGridHelper([i], [j], "orange", user);
      }
      if (arr[i][j] === "x") {
        // e.target.style.backgroundColor = "red";
        updateGridHelper([i], [j], "red", user);
      } else if (arr[i][j] === "o") {
        updateGridHelper([i], [j], "grey", user);
      }
    }
  }
};

// welcomeScreen();

export default makeGrid;
