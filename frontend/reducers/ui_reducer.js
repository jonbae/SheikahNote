import {
  SELECT_NOTE,
  SELECT_NOTEBOOK,
  OPEN_MODAL,
  CLOSE_MODAL
} from "../actions/ui_actions";

// import { combineReducers } from "redux";

// import modal from "./modal_reducer";
// import fullscreen from "./fullscreen_reducer";
// import selected from "./selected";

// const { selectedNoteId, selectedNotebookId } = selected;

// export default combineReducers({
//   modal,
//   fullscreen,
//   selectedNoteId,
//   selectedNotebookId
// });
const defaultUIState = {
  selectedNoteId: null,
  selectedNotebookId: null,
  // loadingNote: true,
  fullScreen: false
  // signInDemoUser: false
};

const ui = (state = defaultUIState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SELECT_NOTE:
      return Object.assign({}, state, { selectedNoteId: action.noteId });
    case SELECT_NOTEBOOK:
      return Object.assign({}, state, {
        selectedNotebookId: action.notebookId
      });
    case OPEN_MODAL:
      if (action.modal === "update_notebook") {
        return { type: "update_notebook", id: action.id };
      }

      return { type: action.modal };
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};
// const ui = (state = defaultUIState, action) => {
//   Object.freeze(state);
//   switch (action.type) {
//     case SELECT_NOTE:
//       return merge({}, state, {
//         selectedNoteId: action.noteId,
//         signInDemoUser: false
//       });
//     case SELECT_NOTEBOOK:
//       return merge({}, state, {
//         selectedNotebookId: action.notebookId,
//         signInDemoUser: false
//       });
//     case OPEN_DROPDOWN:
//       return merge({}, state, {
//         dropdown: action.component,
//         componentId: action.componentId
//       });
//     case OPEN_MODAL:
//       return merge({}, state, {
//         modal: action.component,
//         componentId: action.componentId
//       });
//     case CLOSE_UI_ELEMENTS:
//       return merge({}, state, {
//         dropdown: null,
//         modal: null
//       });
//     case START_LOADING_NOTE:
//       return merge({}, state, {
//         loadingNote: true
//       });
//     case END_LOADING_NOTE:
//       return merge({}, state, {
//         loadingNote: false
//       });
//     case TOGGLE_FULL_SCREEN:
//       return merge({}, state, {
//         fullScreen: !state.fullScreen
//       });
//     case SIGN_IN_DEMO_USER:
//       return merge({}, state, {
//         signInDemoUser: true
//       });
//     default:
//       return state;
//   }
// };

export default ui;
