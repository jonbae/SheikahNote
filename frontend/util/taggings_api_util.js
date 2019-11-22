export const fetchTaggings = () => {
  return $.ajax({
    url: "/api/taggings",
    method: "get"
  });
};

export const createTagging = tagging => {
  return $.ajax({
    url: "/api/taggings",
    method: "post",
    data: tagging
  });
};

export const deleteTagging = id => {
  return $.ajax({
    url: `/api/taggings/${id}`,
    method: "delete"
  });
};
