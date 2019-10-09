import { connect } from "react-redux";

import { logout } from "../../../actions/session_actions";
import { selectAllNotebooks, selectNotes } from "../../../reducers/selectors";

import {
  requestAllNotebooks,
  requestNotebook,
  createNotebook,
  updateNotebook,
  deleteNotebook
} from "../../../actions/notebook_actions";
import NotebookIndex from "./notebook_index";

import { openModal, closeModal } from "../../../actions/modal_actions";

const msp = (state, ownProps) => ({
  // const notebookId = parseInt(ownProps.match.params.notebookId);
  // return (
  //     notebookId
  // );

  // notes: selectNotes(state),
  notebooks: selectAllNotebooks(state),
  formType: "Create new notebook"
});

const mdp = dispatch => ({
  requestAllNotebooks: () => dispatch(requestAllNotebooks()),
  requestNotebook: id => dispatch(requestNotebook(id)),
  // createNotebook: notebook => dispatch(createNotebook(notebook)),
  // updateNotebook: notebook => dispatch(updateNotebook(notebook)),
  deleteNotebook: id => {
    debugger;
    return dispatch(deleteNotebook(id));
  },

  processUpdateForm: notebook => dispatch(updateNotebook(notebook)),

  openModal: (modal, id) => dispatch(openModal(modal, id)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  msp,
  mdp
)(NotebookIndex);
