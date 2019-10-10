export const fetchAllNotes = () => {
  debugger;
  return $.ajax({
    method: "get",
    url: "api/notes"
  });
};

export const fetchNote = id =>
  $.ajax({
    method: "get",
    url: `api/notes/${id}`
  });

export const createNote = note => {
  //   debugger;
  return $.ajax({
    method: "post",
    url: `api/notes/${note.id}`,
    data: { note }
  });
};

export const updateNote = note => {
  // debugger
  return $.ajax({
    method: "patch",
    url: `api/notes/${note.id}`,
    data: { note }
  });
};
//    data: { notebook: { title: notebook.title } }

export const deleteNote = id =>
  $.ajax({
    method: "delete",
    url: `api/notes/${id}`
  });
