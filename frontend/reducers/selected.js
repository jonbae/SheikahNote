import { SELECT_NOTE, SELECT_NOTEBOOK } from "../actions/ui_actions";

export default function selectReducer(
  state = { selectedNoteId: null, selectedNotebookId: null },
  action
) {
  switch (action.type) {
    case SELECT_NOTE:
      return Object.assign({}, state, { selectedNoteId: action.noteId });
    case SELECT_NOTEBOOK:
      return Object.assign({}, state, {
        selectedNotebookId: action.notebookId
      });

    default:
      return state;
  }
}
