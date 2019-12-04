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
  createTagging,
  deleteTagging
} from "../../../actions/tag_action";

import {
  selectNote,
  selectNotebook,
  // selectNoteTags
  selectNoteTaggings
} from "../../../reducers/selectors";

const msp = (state, ownProps) => {
  const noteId = parseInt(ownProps.match.params.noteId);
  const note = selectNote(state, parseInt(ownProps.match.params.noteId)) || {
    title: "",
    content: ""
  };
  const notebook = note ? selectNotebook(state, note.notebookId) : null;
  // const tags = selectNoteTags(state, noteId);
  const taggings = selectNoteTaggings(state, noteId);
  const tags = taggings.map(tagging => {
    return state.entities.tags[tagging.tagId];
  });
  debugger;
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
  deleteTagging: id => dispatch(deleteTagging(id))
});

export default connect(msp, mdp)(NoteShow);
