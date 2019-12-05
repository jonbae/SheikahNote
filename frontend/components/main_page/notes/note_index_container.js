import { connect } from "react-redux";

import { selectAllNotes } from "../../../reducers/selectors";
import {
  requestAllNotebooks,
  requestNotebook
} from "../../../actions/notebook_actions";

import { selectNote, selectNotebook } from "../../../actions/ui_actions";

import {
  requestAllNotes,
  requestNote,
  updateNote,
  deleteNote
} from "../../../actions/note_actions";

import {
  requestAllTags,
  requestAllTaggings
} from "../../../actions/tag_action";

import NoteIndex from "./note_index";

const msp = state => {
  const notes = selectAllNotes(state);
  debugger;

  return {
    isNotebook: false,
    notes,
    path: "/app/notes",
    selectedNotebookId: state.ui.notebookId,
    selectedNoteId: state.ui.noteId
  };
};

const mdp = dispatch => ({
  requestAllNotes: () => dispatch(requestAllNotes()),
  requestNote: id => dispatch(requestNote(id)),
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: id => dispatch(deleteNote(id)),
  requestAllNotebooks: () => dispatch(requestAllNotebooks()),
  requestNotebook: notebookId => dispatch(requestNotebook(notebookId)),
  selectNotebook: notebookId => dispatch(selectNotebook(notebookId)),
  selectNote: noteId => dispatch(selectNote(noteId)),
  requestAllTags: () => dispatch(requestAllTags()),
  requestAllTaggings: () => dispatch(requestAllTaggings())
});

export default connect(msp, mdp)(NoteIndex);
