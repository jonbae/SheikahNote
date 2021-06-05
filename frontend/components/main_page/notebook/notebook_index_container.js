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
import { request } from "http";

const msp = (state, ownProps) => {
  
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
  // const notebookId = parseInt(ownProps.match.params.notebookId);

  // notes: selectAllNotes(state),
  notebooks: notebooks,
  formType: "Create new notebook"
}};

const mdp = dispatch => ({
  requestAllNotebooks: () => dispatch(requestAllNotebooks()),
  requestNotebook: id => dispatch(requestNotebook(id)),
  // createNotebook: notebook => dispatch(createNotebook(notebook)),
  // updateNotebook: notebook => dispatch(updateNotebook(notebook)),
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
