import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE
} from "../actions/note_actions";

const notesReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_NOTES:
      return Object.assign({}, state, action.notes);
    case RECEIVE_NOTE:
      debugger;
      newState = { [action.note.id]: action.note };
      return Object.assign({}, state, newState);
    case REMOVE_NOTE:
      newState = Object.assign({}, state);
      delete newState[action.noteId];
      return newState;
    default:
      return state;
  }
};

export default notesReducer;
