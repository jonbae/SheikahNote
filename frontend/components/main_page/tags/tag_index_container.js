import { connect } from "react-redux";

import {
    requestAllTags,
    requestAllTaggings
} from "../../../actions/tag_action";

import { selectAllTags } from "../../../reducers/selectors";

import TagIndex from "./tag_index";

const msp = (state, ownProps) => ({
    tags: selectAllTags(state)
});

const mdp = dispatch => {
    debugger;
    return {
        requestAllTaggings: () => dispatch(requestAllTaggings()),
        requestAllTags: () => dispatch(requestAllTags())
    };
};

export default connect(msp, mdp)(TagIndex);
