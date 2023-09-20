import makeGrid from "./domFunctions";

const playerBoard = document.querySelector(".playerBoard");
const computerBoard = document.querySelector(".computerBoard");

makeGrid(playerBoard);
makeGrid(computerBoard);
