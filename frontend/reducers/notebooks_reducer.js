import {
  RECEIVE_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
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
    case RECEIVE_NOTEBOOK:
      newState = { [action.notebook.id]: action.notebook };
      return Object.assign({}, state, newState);
    case REMOVE_NOTEBOOK:
      newState = Object.assign({}, state);
      delete newState[action.notebookId];
      return newState;

    // remember to put receiveNotes
    // case RECEIVE_NOTES:
    //   return Object.assign({}, state, action.notes);
    default:
      return state;
  }
};

export default notebooksReducer;
