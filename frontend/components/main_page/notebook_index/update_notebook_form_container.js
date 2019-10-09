import { connect } from "react-redux";
import React from "react";

import { updateNotebook } from "../../../actions/notebook_actions";
import { openModal, closeModal } from "../../../actions/modal_actions";

import NotebookForm from "./notebook_form";

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    notebook: state.entities.notebooks[ownProps.notebookId],
    // errors: errors.session,

    hiddenClass: "hidden",
    formType: "update",
    title: "Rename notebook"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: notebook => dispatch(updateNotebook(notebook)),
    // processForm: (user) => dispatch(signup(user)),
    // otherForm: (
    //   <button onClick={() => dispatch(openModal('create_notebook'))}>
    //     Login
    //   </button>
    // ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookForm);
