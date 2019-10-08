export const fetchAllNotebooks = () =>
  $.ajax({
    method: "get",
    url: "api/notebooks"
  });

export const fetchNotebook = id =>
  $.ajax({
    method: "get",
    url: `api/notebooks/${id}`
  });

export const createNotebook = notebook =>
  $.ajax({
    method: "post",
    url: `api/notebooks`,
    notebook
  });

export const updateNotebook = notebook =>
  $.ajax({
    method: "put",
    url: `api/notebooks/${notebook.id}`,
    notebook
  });

export const deleteNotebook = id => {
  debugger;
  return $.ajax({
    method: "delete",
    url: `api/notebooks/${id}`
  });
};
