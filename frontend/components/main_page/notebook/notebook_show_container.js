import { connect } from "react-redux";

import { selectNote, selectNotebookNotes } from "../../../reducers/selectors";

import {
  requestAllNotebooks,
  requestNotebook
} from "../../../actions/notebook_actions";
import {
  requestAllNotes,
  requestNote,
  createNote,
  updateNote,
  deleteNote
} from "../../../actions/note_actions";

//NotebookShow === NoteIndex
import NotebookShow from "../notes/note_index";
import {
  requestAllTags,
  requestAllTaggings
} from "../../../actions/tag_action";

const msp = (state, ownProps) => {
  const notebookId = parseInt(ownProps.match.params.notebookId);
  const selectedNotebook = state.entities.notebooks[notebookId];
  const title = selectedNotebook ? selectedNotebook.title : null;
  // debugger;
  return {
    notebookId,
    title,
    // notebookTitle:
    //   state.entities.notebooks[ownProps.match.params.notebookId].title,
    isNotebook: true,
    notes: selectNotebookNotes(state, notebookId),
    path: `/app/notebooks/${notebookId}/notes`
  };
};

const mdp = dispatch => ({
  requestAllNotes: () => dispatch(requestAllNotes()),
  requestNote: id => dispatch(requestNote(id)),
  createNote: note => dispatch(createNote(note)),
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: id => dispatch(deleteNote(id)),
  requestAllNotebooks: () => dispatch(requestAllNotebooks()),
  requestNotebook: notebookId => dispatch(requestNotebook(notebookId)),
  selectNotebook: notebookId => dispatch(selectNotebook(notebookId)),
  selectNote: noteId => dispatch(selectNote(noteId)),

  requestAllTags: () => dispatch(requestAllTags()),
  requestAllTaggings: () => dispatch(requestAllTaggings())
});

export default connect(msp, mdp)(NotebookShow);
