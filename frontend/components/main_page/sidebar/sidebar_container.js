import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import { logout } from "../../../actions/session_actions";
import Sidebar from "./sidebar";
import { requestAllNotes } from "../../../actions/note_actions";
import {
  selectAllNotebooks,
  selectAllNotes,
  selectNotebookNotes
} from "../../../reducers/selectors";
import { createNote } from "../../../actions/note_actions";

const msp = (state, ownProps) => {
  // debugger;
  let notebooks = selectAllNotebooks(state)
  // debugger;
  if(notebooks.length !== 0) {

    notebooks = notebooks.map( notebook => {
      let notes = selectNotebookNotes(state,notebook.id)
      notebook = {...notebook, notes}
      return notebook;
    })
  }
  return {
    currentUser: state.entities.users[state.session.id],
    notebooks,
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
