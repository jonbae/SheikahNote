import * as APIUtil from "../util/notebook_api_util";

export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";

//payload like receiveNotbeook
export const receiveAllNotebooks = notebooks => {
  return {
    type: RECEIVE_NOTEBOOKS,
    notebooks
  };
};

export const receieveNotebook = payload => {
  return {
    type: RECEIVE_NOTEBOOK,
    notebook: payload.notebook,
    notes: payload.notes
  };
};

export const removeNotebook = notebook => {
  return {
    type: REMOVE_NOTEBOOK,
    notebookId: notebook.id
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
  return APIUtil.createNotebook(notebook).then(notebook =>
    dispatch(receieveNotebook(notebook))
  );
};

export const updateNotebook = notebook => dispatch => {
  return APIUtil.updateNotebook(notebook).then(notebook => {
    dispatch(receieveNotebook(notebook));
  });
};

export const deleteNotebook = id => dispatch => {
    
  return APIUtil.deleteNotebook(id).then(notebook => {
      
    //can be `id` just make sure to change in thunk action parameter to id on line 23
    return dispatch(removeNotebook(notebook));
  });
};
