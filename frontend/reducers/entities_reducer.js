import { combineReducers } from "redux";

import users from "./users_reducer";
import notebooks from "./notebooks_reducer";
import notes from "./notes_reducer";

export default combineReducers({
  users,
  notebooks,
  notes
});
