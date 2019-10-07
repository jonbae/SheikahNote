import { connect } from "react-redux";

import { logout } from "../../../actions/session_actions";
import Sidebar from "./sidebar";
import { selectAllNotebooks } from "../../../reducers/selectors";

const msp = state => ({
  currentUser: state.entities.users[state.session.id],
  notebooks: selectAllNotebooks(state)
});

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  msp,
  mdp
)(Sidebar);
