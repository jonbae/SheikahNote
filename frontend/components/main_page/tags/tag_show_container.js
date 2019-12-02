import { connect } from "react-redux";

import {
  selectNote,
  selectTaggedNotes,
  selectAllNotes
} from "../../../reducers/selectors";

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

import {
  requestAllTags,
  requestAllTaggings
} from "../../../actions/tag_action";

import TagShow from "../notes/note_index";

const msp = (state, ownProps) => {
  const tagId = parseInt(ownProps.match.params.tagId);
  return {
    tagId,
    // isTag: true,
    taggedNotes: selectTaggedNotes(state, tagId),

    isNotebook: false,
    notes: selectAllNotes(state), //selectTaggedNotes(state, tagId),
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
    requestNotebook: notebookId => dispatch(requestNotebook(notebookId)),
    selectNotebook: notebookId => dispatch(selectNotebook(notebookId)),
    selectNote: noteId => dispatch(selectNote(noteId)),

    requestAllTags: () => dispatch(requestAllTags()),
    requestAllTaggings: () => dispatch(requestAllTaggings())
  };
};

export default connect(msp, mdp)(TagShow);
