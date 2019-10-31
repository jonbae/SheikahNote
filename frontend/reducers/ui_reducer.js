import { combineReducers } from "redux";

import modal from "./modal_reducer";
import fullscreen from "./fullscreen_reducer";

export default combineReducers({
  modal,
  fullscreen
});
