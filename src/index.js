import makeGrid, {
  getGridPosition,
  updateGrid,
  welcomeScreen,
  winnerScreen,
} from "./domFunctions";

import gameFlow from "./gameControl";
import { players } from "./gameControl";

welcomeScreen(players.player);
gameFlow();
