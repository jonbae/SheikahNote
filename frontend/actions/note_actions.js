import * as APIUtil from "../util/notes_api_util";

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";

export const receiveAllNotes = notes => {
  return {
    type: RECEIVE_NOTES,
    notes
  };
};

//for future include tags
export const receiveNote = payload => {
  debugger;
  return {
    type: RECEIVE_NOTE,
    note: payload.note
  };
};

export const removeNote = id => {
  return {
    type: REMOVE_NOTE,
    noteId: id
  };
};

export const requestAllNotes = () => dispatch => {
  return APIUtil.fetchAllNotes().then(notes =>
    dispatch(receiveAllNotes(notes))
  );
};
export const requestNote = id => dispatch => {
  debugger;
  return APIUtil.fetchNote(id).then(note => dispatch(receiveNote(note)));
};

export const createNote = note => dispatch => {
  return APIUtil.createNote(note).then(note => dispatch(receiveNote(note)));
};

export const updateNote = note => dispatch => {
  return APIUtil.updateNote(note).then(note => dispatch(receiveNote(note)));
};

export const deleteNote = id => dispatch => {
  return APIUtil.deleteNote(id).then(note => dispatch(removeNote(id)));
};
