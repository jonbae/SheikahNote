import { connect } from "react-redux";

import TagShow from "../notes/note_index";

const msp = state => {
  return {
    isNotebook: false,
    notes: selectTaggedNotes(state),
    path: `/app/tags/${tagId}/notes`
  };
};

const mdp = dispatch => {
  return {
    requestAllNotes: () => dispatch(requestAllNotes()),
    requestNote: id => dispatch(requestNote(id)),
    createNote: note => dispatch(createNote(note)),
    updateNote: note => dispatch(updateNote(note)),
    deleteNote: id => dispatch(deleteNote(id)),
    requestAllNotebooks: () => dispatch(requestAllNotebooks()),
    requestNotebook: notebookId => dispatch(requestNotebook(notebookId))
  };
};

export default connect(msp, mdp)(TagShow);
