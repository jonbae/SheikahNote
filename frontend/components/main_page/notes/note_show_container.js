import { connect } from "react-redux";

import NoteShow from "./note_show";
import {
  requestNote,
  updateNote,
  deleteNote,
  requestAllNotes
} from "../../../actions/note_actions";

import {
  requestAllTaggings,
  requestAllTags,
  deleteTagging
} from "../../../actions/tag_action";

import {
  selectNote,
  selectNotebook,
  selectNoteTags,
  selectNoteTaggings,
  selectTaggingTags
} from "../../../reducers/selectors";

import { createTagging } from "../../../actions/tag_action";

const msp = (state, ownProps) => {
  const noteId = parseInt(ownProps.match.params.noteId);
  const note = selectNote(state, parseInt(ownProps.match.params.noteId)) || {
    title: "",
    content: ""
  };
  const notebook = note ? selectNotebook(state, note.notebookId) : null;
  const taggings = selectNoteTaggings(state, noteId);

  const tags = selectNoteTags(state, noteId);
  debugger;
  // selectNoteTags(state, noteId);
  return {
    noteId,
    taggings,
    tags,
    note,
    notebook
  };
};

const mdp = dispatch => ({
  requestNote: id => dispatch(requestNote(id)),
  // createNote: note => dispatch(createNote(note)),
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: id => dispatch(deleteNote(id)),

  requestAllTags: () => dispatch(requestAllTags()),
  requestAllTaggings: () => dispatch(requestAllTaggings()),
  createTagging: tagging => dispatch(createTagging(tagging)),
<<<<<<< HEAD
  deleteTagging: id => dispatch(deleteTagging(id))
=======
  deleteTagging: tagging => dispatch(deleteTagging(tagging))
>>>>>>> test
});

export default connect(msp, mdp)(NoteShow);
