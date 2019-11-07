import { connect } from "react-redux";

import NoteShow from "./note_show";
import { requestNote } from "../../../actions/note_actions";
import { toggleFullScreen } from "../../../actions/ui_actions";
import { selectNote } from "../../../reducers/selectors";

const msp = (state, ownProps) => {
  debugger;
  const noteId = parseInt(ownProps.match.params.noteId);
  return {
    noteId: noteId,
    note: selectNote(state, noteId),
    fullScreen: state.ui.fullScreen
  };
};

const mdp = dispatch => {
  debugger;
  return {
    requestNote: id => dispatch(requestNote(id)),
    createNote: note => dispatch(createNote(note)),
    updateNote: note => dispatch(updateNote(note)),
    deleteNote: id => dispatch(deleteNote(id)),
    toggleFullScreen: () => dispatch(toggleFullScreen())
  };
};

export default connect(
  msp,
  mdp
)(NoteShow);
