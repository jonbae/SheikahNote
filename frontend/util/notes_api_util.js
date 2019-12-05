export const fetchAllNotes = () => {
  return $.ajax({
    method: "get",
    url: "api/notes"
  });
};

export const fetchNote = id => {
  return $.ajax({
    method: "get",
    url: `api/notes/${id}`
  });
};

export const createNote = note => {
  return $.ajax({
    method: "post",
    url: `api/notes`,
    data: { note }
  });
};

export const updateNote = note => {
  // debugger
  return $.ajax({
    method: "patch",
    url: `api/notes/${note.id}`,
    data: { note }``
  });
};
//    data: { notebook: { title: notebook.title } }

export const deleteNote = id =>
  $.ajax({
    method: "delete",
    url: `api/notes/${id}`
  });
