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
  return $.ajax({
    url: `/api/tags`,
    method: "post",
    data: tag
  });
};

export const deleteTag = id => {
  return $.ajax({
    url: `/api/tags`,
    method: "delete"
  });
};
