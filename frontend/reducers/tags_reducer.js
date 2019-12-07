import { RECEIVE_TAGS, RECEIVE_TAG, REMOVE_TAG } from "../actions/tag_action";
import { RECEIVE_TAGGING, REMOVE_TAGGING } from "../actions/tag_action";
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
      debugger;
      delete newState[action.id];
      return newState;
    case RECEIVE_TAGGING:
      newState = Object.assign({}, state);
      debugger;
      newState[action.tagging.tagId].taggingIds.push(action.tagging.id);
      return newState;
    case REMOVE_TAGGING:
      newState = Object.assign({}, state);
      debugger;
      newState[action.tagging.tagId].taggingIds.filter(
        taggingId => taggingId !== action.tagging.id
      );
    default:
      return state;
  }
};

export default tagsReducer;
