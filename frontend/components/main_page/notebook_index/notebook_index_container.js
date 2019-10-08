import { connect } from "react-redux";

import { logout } from "../../../actions/session_actions";
import { selectAllNotebooks } from "../../../reducers/selectors";
import {
  requestAllNotebooks,
  requestNotebook,
  createNotebook,
  updateNotebook,
  removeNotebook
} from "../../../actions/notebook_actions";
import NotebookIndex from "./notebook_index";

const msp = (state, ownProps) => ({
  // const notebookId = parseInt(ownProps.match.params.notebookId);
  // return (
  //     notebookId
  // );
  notebooks: selectAllNotebooks(state)
});

const mdp = dispatch => ({
  requestAllNotebooks: () => dispatch(requestAllNotebooks()),
  requestNotebook: id => dispatch(requestNotebook(id)),
  createNotebook: notebook => dispatch(createNotebook(notebook)),
  updateNotebook: notebook => dispatch(updateNotebook(notebook)),
  deleteNotebook: id => dispatch(deleteNotebook(id))
});

export default connect(
  msp,
  mdp
)(NotebookIndex);
