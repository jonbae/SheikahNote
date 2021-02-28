import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG,
  RECEIVE_TAGGING,
  REMOVE_TAGGING
} from "../actions/tag_action";

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

    // case RECEIVE_TAGGING:
    //   newState = Object.assign({}, state);
    //   newState[action.tagging.tagId].taggingIds.push(action.tagging.id);
    //   return newState;
    case REMOVE_TAGGING:
      newState = Object.assign({}, state);
      let newTaggings = newState[action.tagging.tagId].taggingIds.filter(
        taggingId => taggingId !== action.tagging.id
      );

      newState[action.tagging.tagId].taggingIds = newTaggings;
      //   newState = { [action.tagging.tagId]: { taggingIds: newTaggings } };
       
      return Object.assign({}, state, newState);

    default:
      return state;
  }
};

export default tagsReducer;
