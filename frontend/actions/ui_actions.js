export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const FULLSCREEN = "FULLSCREEN";
export const SELECT_NOTE = "SELECT_NOTE";
export const SELECT_NOTEBOOK = "SELECT_NOTEBOOK";

export const openModal = (modal, id) => {
  return {
    type: OPEN_MODAL,
    modal,
    id: id
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const fullscreen = () => {
  return {
    type: FULLSCREEN
  };
};

export const selectNote = noteId => {
  return {
    type: SELECT_NOTE,
    noteId
  };
};

export const selectNotebook = notebookId => {
  return {
    type: SELECT_NOTEBOOK,
    notebookId
  };
};
