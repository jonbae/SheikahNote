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

      // let nbId = action.notebook.id;
      newState[action.notebook.author_id].authoredNotebookIds.push(
        action.notebook.id
      );
      // debugger;
      return newState;

    // case REMOVE_NOTEBOOK:
    //   newState = Object.assign({}, state);
    //   let nbId = action.notebookId;
    //   debugger;
    //   return newState;

    default:
      return state;
  }
};

export default usersReducer;

// note from Josh

// Is this specifically for the usersReducer?
// If so, you’re probably best off refactoring your code so that the backend send back the full data of the notebook you just deleted, and that’s what gets passed into your regular action creator. Then you can refactor your notebooksReducer to pull out that id and use it, and in the userReducer you’ll have access to the author_id
