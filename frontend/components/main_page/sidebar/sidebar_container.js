import { connect } from "react-redux";

import { logout } from "../../../actions/session_actions";
import Sidebar from "./sidebar";
import {
  selectAllNotebooks,
  selectAllNotes
} from "../../../reducers/selectors";
import { createNote } from "../../../actions/note_actions";

const msp = state => ({
  currentUser: state.entities.users[state.session.id],
  notebooks: selectAllNotebooks(state),
  // firstNote: state.entities.notes[0]
  notes: selectAllNotes(state)
});

const mdp = dispatch => {
  debugger;
  return {
    logout: () => dispatch(logout()),
    createNote: note => dispatch(createNote(note))
  };
};

export default connect(
  msp,
  mdp
)(Sidebar);
