import { connect } from "react-redux";

import NoteShow from "./note_show";
import { requestNote } from "../../../actions/note_actions";
import { selectNote } from "../../../reducers/selectors";

const msp = (state, ownProps) => {
  const noteId = parseInt(ownProps.match.params.noteId);
  return { noteId: noteId, note: selectNote(state, noteId) };
};

const mdp = dispatch => ({
  requestNote: id => dispatch(requestNote(id)),
  createNote: note => dispatch(createNote(note)),
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: id => dispatch(deleteNote(id))
});

export default connect(
  msp,
  mdp
)(NoteShow);
