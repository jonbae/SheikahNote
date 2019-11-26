import { RECEIVE_TAGS, RECEIVE_TAG, REMOVE_TAG } from "../actions/tag_action";

const tagsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_TAGS:
            return Object.assign({}, state, action.tags);
        case RECEIVE_TAG:
            newState = { [action.tag.id]: action.tag };
            return Object.assign({}, state, newState);
        case REMOVE_TAG:
            newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default tagsReducer;
