import { connect } from "react-redux";
import MainPage from "./main_page";

const msp = (state, ownProps) => {
  return {
    fullScreen: state.ui.fullScreen
  };
};

const mdp = dispatch => ({});

export default connect(
  msp,
  mdp
)(MainPage);
