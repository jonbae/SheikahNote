import { combineReducers } from "redux";

import users from "./users_reducer";
import notebooks from "./notebooks_reducer"

export default combineReducers({

  users,
  notebooks, 

});
