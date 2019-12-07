export const fetchTags = () => {
  return $.ajax({
    url: `/api/tags`,
    method: "get"
  });
};

export const fetchNotesWithTag = id => {
  return $.ajax({
    url: `/api/tags/${id}`,
    method: "get"
  });
};

export const createTag = tag => {
  debugger;
  return $.ajax({
    url: `/api/tags`,
    method: "post",
    data: tag
  });
};

export const deleteTag = id => {
  return $.ajax({
    url: `/api/tags/${id}`,
    method: "delete"
  });
};

export const fetchTaggings = () => {
  return $.ajax({
    url: "/api/taggings",
    method: "get"
  });
};

export const createTagging = tagging => {
  debugger;
  return $.ajax({
    url: "/api/taggings",
    method: "post",
    data: tagging
  });
};

export const deleteTagging = id => {
  debugger;
  return $.ajax({
    url: `/api/taggings/${id}`,
    method: "delete"
  });
};
