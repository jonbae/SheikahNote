import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK } from "../actions/notebook_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {
        [action.currentUser.id]: action.currentUser
      });
    case RECEIVE_NOTEBOOK:
      newState = Object.assign({}, state);

      //adds the notebookId to authoredNotebookIds

      let nbId = action.notebook.id;
      newState[action.notebook.author_id].authoredNotebookIds.push(
        action.notebook.id
      );
      // debugger;
      return newState;
    // case RECEIVE_NOTEBOOK:
    //   newState = {  :action.notebook.id}
    // case REMOVE_NOTEBOOK:
    //   newState = Object.assign({}, state);
    //   delete newState[action.]
    default:
      return state;
  }
};

export default usersReducer;
