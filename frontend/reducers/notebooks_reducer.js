import {
  RECEIVE_NOTEBOOKS,
  RECIEVE_NOTEBOOK,
  REMOVE_NOTEBOOK
} from "../actions/notebook_actions";
import merge from "lodash/merge";

const notebooksReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_NOTEBOOKS:
      return Object.assign({}, state, action.notebooks);
    // alternatively
    // return action.notebooks
    case RECIEVE_NOTEBOOK:
      debugger;
      newState = { [action.notebook.id]: action.notebook };
      return Object.assign({}, state, newState);
    case REMOVE_NOTEBOOK:
      debugger;
      newState = Object.assign({}, state);
      delete newState[action.notebookId];
      return newState;

    // remember to put receiveNotes

    default:
      return state;
  }
};

export default notebooksReducer;
