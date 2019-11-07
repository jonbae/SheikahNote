import { combineReducers } from "redux";

import modal from "./modal_reducer";
import fullScreen from "./fullscreen_reducer";

export default combineReducers({
  modal,
  fullScreen
});
