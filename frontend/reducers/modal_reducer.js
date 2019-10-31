import { OPEN_MODAL, CLOSE_MODAL } from "../actions/ui_actions";

export default function modalReducer(state = null, action) {
  switch (action.type) {
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
}
