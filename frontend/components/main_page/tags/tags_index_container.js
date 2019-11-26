import { connect } from "react-redux";

import {
    requestAllTags,
    requestAllTaggings
} from "../../../actions/tag_action";

import TagsIndex from "./tags_index";

const msp = (state, ownProps) => {};

const mdp = dispatch({
    requestAllTaggings: () => dispatch(requestAllTaggings),
    requestAllTags: () => dispatch(requestAllTags)
});

export default connect(msp, mdp)(TagsIndex);
