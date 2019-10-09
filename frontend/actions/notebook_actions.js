import * as APIUtil from "../util/notebook_api_util";

export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";

//payload like receiveNOtbeook
export const receiveAllNotebooks = notebooks => {
  return {
    type: RECEIVE_NOTEBOOKS,
    notebooks
  };
};

export const receieveNotebook = payload => {
  debugger;
  return {
    type: RECEIVE_NOTEBOOK,
    notebook: payload.notebook,
    notes: payload.notes
  };
};

export const removeNotebook = id => {
  debugger;
  return {
    type: REMOVE_NOTEBOOK,
    notebookId: id
  };
};

export const requestAllNotebooks = () => dispatch =>
  APIUtil.fetchAllNotebooks().then(notebooks =>
    dispatch(receiveAllNotebooks(notebooks))
  );

export const requestNotebook = id => dispatch =>
  APIUtil.fetchNotebook(id).then(notebook =>
    dispatch(receieveNotebook(notebook))
  );

export const createNotebook = notebook => dispatch => {
  debugger;
  return APIUtil.createNotebook(notebook).then(notebook =>
    dispatch(receieveNotebook(notebook))
  );
};

export const updateNotebook = notebook => dispatch => {
  debugger;
  return APIUtil.updateNotebook(notebook).then(notebook => {
    debugger;
    dispatch(receieveNotebook(notebook));
  });
};
export const deleteNotebook = id => dispatch => {
  debugger;
  return APIUtil.deleteNotebook(id).then(notebook =>
    dispatch(removeNotebook(id))
  );
};
