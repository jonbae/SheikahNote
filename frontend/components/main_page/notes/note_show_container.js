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
  selectTaggingTags,
  selectAllNotes
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
  const notes = selectAllNotes(state);
  // selectNoteTags(state, noteId);
  return {
    noteId,
    taggings,
    tags,
    note,
    notebook,
    notes
  };
};

const mdp = dispatch => ({
  requestNote: id => dispatch(requestNote(id)),
  requestAllNotes: () => dispatch(requestAllNotes()),
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: id => dispatch(deleteNote(id)),

  requestAllTags: () => dispatch(requestAllTags()),
  requestAllTaggings: () => dispatch(requestAllTaggings()),
  createTagging: tagging => dispatch(createTagging(tagging)),
  deleteTagging: tagging => dispatch(deleteTagging(tagging))
});

export default connect(msp, mdp)(NoteShow);
