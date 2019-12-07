import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE
} from "../actions/note_actions";

<<<<<<< HEAD
=======
import {
  RECEIVE_TAGGING,
  RECEIVE_TAG,
  REMOVE_TAGGING
} from "../actions/tag_action";

>>>>>>> tagsBranch
const notesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_NOTES:
      return Object.assign({}, state, action.notes);
    case RECEIVE_NOTE:
      newState = { [action.note.id]: action.note };
      return Object.assign({}, state, newState);
    case REMOVE_NOTE:
      newState = Object.assign({}, state);
      delete newState[action.noteId];
      return newState;
<<<<<<< HEAD
    // case RECEIVE_TAGGING:
    //   newState = Object.assign({}, state);
    //   newState[action.tagging.noteId].push(action.tag.id);
    //   return newState;
=======
    case RECEIVE_TAGGING:
      newState = Object.assign({}, state);
      newState[action.tagging.noteId].taggingIds.push(action.tagging.id);
      return newState;
    case REMOVE_TAGGING:
      newState = Object.assign({}, state);
      debugger;
      newState[action.tagging.noteId].taggingIds.filter(
        taggingId => taggingId !== action.tagging.id
      );
>>>>>>> tagsBranch

    default:
      return state;
  }
};

export default notesReducer;
