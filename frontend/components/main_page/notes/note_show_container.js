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
  requestAllTags
} from "../../../actions/tag_action";
import { selectNote, selectNotebook } from "../../../reducers/selectors";
import { createTagging } from "../../../util/tags_api_util";

const msp = (state, ownProps) => {
  // debugger;
  // const noteId = parseInt(ownProps.match.params.noteId);
  const note = selectNote(state, parseInt(ownProps.match.params.noteId)) || {
    title: "",
    content: ""
  };
  // debugger;
  const notebook = note ? selectNotebook(state, note.notebookId) : null;

  return {
    // noteId,
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
  createTagging: tagging => dispatch(createTagging(tagging))
});

export default connect(msp, mdp)(NoteShow);
