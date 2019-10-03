import { connect } from "react-redux";

import { logout } from "../../actions/session_actions";
import Editor from "./editor";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);