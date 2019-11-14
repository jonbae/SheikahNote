import { connect } from "react-redux";

import NoteShow from "./note_show";
import {
  requestNote,
  updateNote,
  deleteNote
} from "../../../actions/note_actions";
import { selectNote, selectNotebook } from "../../../reducers/selectors";

const msp = (state, ownProps) => {
  const noteId = parseInt(ownProps.match.params.noteId);
  const note = selectNote(state, noteId);
  debugger;
  const notebook = note ? selectNotebook(state, note.notebookId) : null;

  return {
    noteId,
    note,
    notebook
  };
};

const mdp = dispatch => ({
  requestNote: id => dispatch(requestNote(id)),
  // createNote: note => dispatch(createNote(note)),
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: id => dispatch(deleteNote(id))
});

export default connect(msp, mdp)(NoteShow);
