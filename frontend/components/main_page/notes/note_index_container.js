import { connect } from "react-redux";

import { selectAllNotes } from "../../../reducers/selectors";
import {
  requestAllNotebooks,
  requestNotebook
} from "../../../actions/notebook_actions";

import {
  requestAllNotes,
  requestNote,
  createNote,
  updateNote,
  deleteNote
} from "../../../actions/note_actions";

import NoteIndex from "./note_index";

const msp = state => {
  return {
    isNotebook: false,
    notes: selectAllNotes(state),
    path: "/app/notes"
  };
};

const mdp = dispatch => ({
  requestAllNotes: () => dispatch(requestAllNotes()),
  requestNote: id => dispatch(requestNote(id)),
  createNote: note => dispatch(createNote(note)),
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: id => dispatch(deleteNote(id)),
  requestAllNotebooks: () => dispatch(requestAllNotebooks()),
  requestNotebook: notebookId => dispatch(requestNotebook(notebookId))
});

export default connect(
  msp,
  mdp
)(NoteIndex);
