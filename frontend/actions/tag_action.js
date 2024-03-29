import * as APIUtil from "../util/tags_api_util";

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const receiveTag = payload => ({
  type: RECEIVE_TAG,
  tag: payload.tag
});

export const removeTag = id => ({
  type: REMOVE_TAG,
  id
});

export const requestAllTags = () => dispatch => {
  return APIUtil.fetchTags().then(tags => dispatch(receiveTags(tags)));
};

export const requestTag = id => dispatch => {
  return APIUtil.fetchNotesWithTag(id).then(tag => dispatch(receiveTag(tag)));
};

export const createTag = tag => dispatch => {
  return APIUtil.createTag(tag).then(tag => dispatch(receiveTag(tag)));
};

export const deleteTag = id => dispatch => {
  return APIUtil.deleteTag(id).then(id => dispatch(removeTag(id)));
};

export const RECEIVE_TAGGINGS = "RECEIVE_TAGGINGS";
export const RECEIVE_TAGGING = "RECEIVE_TAGGING";
export const REMOVE_TAGGING = "REMOVE_TAGGING";

export const receiveTaggings = taggings => ({
  type: RECEIVE_TAGGINGS,
  taggings
});

export const receiveTagging = payload => {
  return {
    type: RECEIVE_TAGGING,
    tagging: payload.tagging
  };
};

export const removeTagging = payload => ({
  type: REMOVE_TAGGING,
  tagging: payload.tagging,
  tag: payload.tag,
  id: payload.tagging.id
});

export const requestAllTaggings = () => dispatch => {
  return APIUtil.fetchTaggings().then(taggings =>
    dispatch(receiveTaggings(taggings))
  );
};

export const createTagging = tagging => dispatch => {
  return APIUtil.createTagging(tagging).then(tagging => {
    return dispatch(receiveTagging(tagging));
  });
};

export const deleteTagging = tagging => dispatch => {
  return APIUtil.deleteTagging(tagging.id).then(id =>
    dispatch(removeTagging(id))
  );
};
