import { connect } from "react-redux";

import { selectAllNotes } from "../../../reducers/selectors";
import {
  requestAllNotes,
  requestNote,
  createNote,
  updateNote,
  deleteNote
} from "../../../actions/note_actions";

import NoteIndex from "./note_index";

const msp = state => ({
  notes: selectAllNotes(state)
});

const mdp = dispatch => ({
  requestAllNotes: () => dispatch(requestAllNotes()),
  requestNote: id => dispatch(requestNote(id)),
  createNote: note => dispatch(createNote(note)),
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: id => dispatch(deleteNote(id))
});

export default connect(
  msp,
  mdp
)(NoteIndex);
