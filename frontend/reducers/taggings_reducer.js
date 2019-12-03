import {
  RECEIVE_TAGGINGS,
  RECEIVE_TAGGING,
  REMOVE_TAGGING
} from "../actions/tag_action";

const taggingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_TAGGINGS:
      debugger;
      return Object.assign({}, state, action.taggings);
    case RECEIVE_TAGGING:
      debugger;
      newState = { [action.tagging.id]: action.tagging };
      return Object.assign({}, state, newState);
    case REMOVE_TAGGING:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default taggingsReducer;
