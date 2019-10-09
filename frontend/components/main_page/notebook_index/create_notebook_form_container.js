import { connect } from "react-redux";
import React from "react";

import { createNotebook } from "../../../actions/notebook_actions";
import { openModal, closeModal } from "../../../actions/modal_actions";

import NotebookForm from "./notebook_form";

const mapStateToProps = ({ errors }) => {
  return {
    // errors: errors.session,
    formType: "Create new notebook"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processCreateForm: notebook => dispatch(createNotebook(notebook)),
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
