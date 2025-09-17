import { connect } from "react-redux";

import { logout } from "../../../actions/session_actions";
import {
  selectAllNotebooks,
  selectNotebookNotes,
  selectAllNotes
} from "../../../reducers/selectors";

import {
  requestAllNotebooks,
  requestNotebook,
  createNotebook,
  updateNotebook,
  deleteNotebook
} from "../../../actions/notebook_actions";

import { requestAllNotes } from "../../../actions/note_actions";
import NotebookIndex from "./notebook_index";

import { openModal, closeModal } from "../../../actions/ui_actions";

const msp = (state, ownProps) => {
  
  let notebooks = selectAllNotebooks(state)
  if(notebooks.length !== 0) {

    notebooks = notebooks.map( notebook => {
      let notes = selectNotebookNotes(state,notebook.id)
      notebook = {...notebook, notes}
      return notebook;
    })
  }
  return {
    notebooks: notebooks,
    formType: "Create new notebook"
  }
};

const mdp = dispatch => ({
  requestAllNotebooks: () => dispatch(requestAllNotebooks()),
  requestNotebook: id => dispatch(requestNotebook(id)),
  deleteNotebook: id => dispatch(deleteNotebook(id)),
  requestAllNotes: () => dispatch(requestAllNotes()),

  processUpdateForm: notebook => dispatch(updateNotebook(notebook)),

  openModal: (modal, id) => dispatch(openModal(modal, id)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  msp,
  mdp
)(NotebookIndex);
