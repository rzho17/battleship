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
const setAxis = (position, user) => {
  position = position === "x" ? "y" : "x";
  //   console.log(position);
  // setShipHover(user, position);

  return position;
};

const setShipGridHelper = (user, coord, position) => {
  user.placeShip(user.shipHolder.shift(), coord, position);

  updateGrid(user.gameBoard.board, "initialBoard");
};

const setShipHoverHelper = (ship, x, y, color) => {
  const currentShip = ship.shipHolder[0];
  let xPosition = x;
  let yPosition = y;

  for (let i = 0; i < currentShip.length; i++) {
    yPosition = parseInt(yPosition);

    let specificGrid = document.querySelector(
      `.initialBoard [data-grid-position="${xPosition}${yPosition}"]`
    );
    yPosition += 1;

    specificGrid.style.backgroundColor = color;
  }
};

const setShipHoverHelperY = (ship, x, y, color) => {
  const currentShip = ship.shipHolder[0];
  let xPosition = x;
  let yPosition = y;

  for (let i = 0; i < currentShip.length; i++) {
    xPosition = parseInt(xPosition);

    let specificGrid = document.querySelector(
      `.initialBoard [data-grid-position="${xPosition}${yPosition}"]`
    );
    xPosition += 1;

    specificGrid.style.backgroundColor = color;
  }
};

const setShipHover = (user, position, grid) => {
  const initialGrid = document.querySelectorAll(".initialBoard .gridSquare");
  const rotateBtn = document.querySelector(".rotateBtn");
  let tempValue = "";
  // console.log(position);

  //try changing this to be mouse over the initial grid, we might not get the error for things out of bound

  let mouseOverX = () => {};
  let mouseOutX = () => {};
  let mouseOverY = () => {};
  let mouseOutY = () => {};

  // setShipHoverHelper(user, 1, 4, "blue");

  // console.log(grid.dataset.gridPosition[0]);
  // console.log(grid.dataset.gridPosition[1]);
  // if (position === "x") {
  //   console.log("adsf");
  // }

  const test = (position) => {
    console.log(position);
  };

  test(position);

  mouseOverX = () => {
    setShipHoverHelper(
      user,
      grid.dataset.gridPosition[0],
      grid.dataset.gridPosition[1],
      "blue"
    );
  };
  mouseOutX = () => {
    setShipHoverHelper(
      user,
      grid.dataset.gridPosition[0],
      grid.dataset.gridPosition[1],
      "white"
    );
  };
  mouseOverY = () => {
    setShipHoverHelperY(
      user,
      grid.dataset.gridPosition[0],
      grid.dataset.gridPosition[1],
      "green"
    );
  };
  mouseOutY = () => {
    setShipHoverHelperY(
      user,
      grid.dataset.gridPosition[0],
      grid.dataset.gridPosition[1],
      "white"
    );
  };

  // mouseOverX();

  if (position === "x") {
    mouseOverX();
    // mouseOutX();
    // grid.removeEventListener("mouseover", mouseOverY);
    // grid.removeEventListener("mouseout", mouseOutY);
    // console.log("yo");
    // rotateBtn.addEventListener("click", () => {
    // });
    // rotateBtn.removeEventListener("click", mouseOutY);
    // mouseOverX();
    // grid.addEventListener("mouseover", mouseOverX);
    // grid.addEventListener("mouseout", mouseOutX);
  }

  if (position === "y") {
    mouseOverY();
    // mouseOutY();
    // grid.removeEventListener("mouseover", mouseOverX);
    // grid.removeEventListener("mouseout", mouseOutX);
    // // rotateBtn.addEventListener("onclick", () => {
    // // });
    // // rotateBtn.removeEventListener("click", mouseOutY);
    // grid.addEventListener("mouseover", mouseOverY);
    // grid.addEventListener("mouseout", mouseOutY);
  }

  // if (position === "y") {
  //   initialGrid.forEach((grid) => {
  //     grid.removeEventListener("mouseover", mouseOverX);

  //     grid.removeEventListener("mouseout", mouseOutX);

  //     console.log("asdf");

  //     mouseOverY = () => {
  //       setShipHoverHelperY(
  //         user,
  //         grid.dataset.gridPosition[0],
  //         grid.dataset.gridPosition[1],
  //         "green"
  //       );
  //     };
  //     mouseOutY = () => {
  //       setShipHoverHelperY(
  //         user,
  //         grid.dataset.gridPosition[0],
  //         grid.dataset.gridPosition[1],
  //         "white"
  //       );
  //     };

  //     grid.addEventListener("mouseover", mouseOverY);
  //     grid.addEventListener("mouseout", mouseOutY);
  //   });
  // }
};

const setShipHoverTest = (user, position, grid) => {
  let mouseOutX = () => {
    setShipHoverHelper(
      user,
      grid.dataset.gridPosition[0],
      grid.dataset.gridPosition[1],
      "white"
    );
  };
  let mouseOutY = () => {
    setShipHoverHelperY(
      user,
      grid.dataset.gridPosition[0],
      grid.dataset.gridPosition[1],
      "white"
    );
  };

  if (position === "x") {
    mouseOutX();
  }

  if (position === "y") {
    mouseOutY();
  }
};

// const positions = (() => {
//   let position = "x";

//   return { position };
// })();

const setShipGrid = (user) => {
  const initialGrid = document.querySelectorAll(".initialBoard .gridSquare");
  const rotateBtn = document.querySelector(".rotateBtn");
  //   let position = "x";
  let position = "x";
  let executed = false;

  rotateBtn.addEventListener("click", () => {
    position = setAxis(position, user);
    // console.log(position);
  });

  initialGrid.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      setShipHover(user, position, grid);
    });
    grid.addEventListener("mouseout", () => {
      setShipHoverTest(user, position, grid);
    });
  });
  //   console.log(position);

  //goal for tomorrow set the position to switch each time
  initialGrid.forEach((grid) => {
    // grid.addEventListener("mouseover", () => {
    //   grid.style.backgroundColor = "red";
    // });

    grid.addEventListener("click", (e) => {
      const coord = getCoord(e.target.dataset.gridPosition);
      const currentShip = user.shipHolder[0];
      const xValid = 10 - currentShip.length >= coord[1];
      const yValid = 10 - currentShip.length >= coord[0];
      const shipPositionValid =
        user.gameBoard.checkShip(currentShip, coord, position) === false;
      // setShipHover(user, position, grid);

      // console.log(coord);
      // console.log(position);
      // setShipHover(user, position);

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
