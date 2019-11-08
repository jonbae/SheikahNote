import { combineReducers } from "redux";

import modal from "./modal_reducer";
import fullscreen from "./fullscreen_reducer";
import selected from "./selected";

export default combineReducers({
  modal,
  fullscreen,
  selected
});
