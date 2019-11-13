import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import { logout } from "../../../actions/session_actions";
import Sidebar from "./sidebar";
import { requestAllNotes } from "../../../actions/note_actions";
import {
  selectAllNotebooks,
  selectAllNotes
} from "../../../reducers/selectors";
import { createNote } from "../../../actions/note_actions";

const msp = (state, ownProps) => {
  debugger;
  return {
    currentUser: state.entities.users[state.session.id],
    notebooks: selectAllNotebooks(state),
    // firstNote: state.entities.notes[0]
    notes: selectAllNotes(state)
  };
};

const mdp = dispatch => {
  return {
    requestAllNotes: () => dispatch(requestAllNotes(id)),
    logout: () => dispatch(logout()),
    createNote: note => dispatch(createNote(note))
  };
};

export default withRouter(connect(msp, mdp)(Sidebar));
