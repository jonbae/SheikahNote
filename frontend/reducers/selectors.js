export const selectAllNotebooks = function(state) {
  let allNotebooks = Object.values(state.entities.notebooks);
  return allNotebooks.filter(
    // alternatively
    notebook => notebook.authorId === state.session.id
    // notebook =>
    //   state.entities.users[state.session.id].authoredNotebookIds.includes(
    //     notebook.id
    //   )
  );
};
export const selectAllNotes = function(state) {
  let allNotes = Object.values(state.entities.notes);
  // debugger;
  return allNotes.filter(note =>
    state.entities.users[state.session.id].authoredNoteIds.includes(note.id)
  );
};

export const selectNotebookNotes = function(state, notebookId) {
  // let notebookNotes = selectAllNotes(state);
  // debugger;
  //in ownProps.match.params.notebookId
  // return Object.values(state.entities.notebooks[notebookId].notes);
  let notes = Object.values(state.entities.notes);
  // debugger;
  return notes.filter(note => note.notebookId === notebookId);
};

//refactor after ui reducers
export const selectNote = function(state, noteId) {
  // debugger
  return state.entities.notes[noteId];
};

export const selectNotebook = function(state, notebookId) {
  // debugger
  return state.entities.notebooks[notebookId];
};

export const selectAllTags = function(state) {
  let allTags = Object.values(state.entities.tags);
  return allTags.filter(tag =>
    state.entities.users[state.session.id].authoredTagIds.includes(tag.id)
  );
  // return allTags.filter( tag => state.entities.users[state.session.id].)
};

export const selectTaggedNotes = function(state, tagId) {
  let notes = Object.values(state.entities.notes);
  return notes.filter(note => note.tagIds.includes(tagId));
};

// export const selectNoteTags = function(state, noteId) {
//   let tags = Object.values(state.entities.tags);
//   return tags.filter(tag => tag.noteIds.includes(noteId));
// };

export const selectNoteTaggings = function(state, noteId) {
  let taggings = Object.values(state.entities.taggings);
  return taggings.filter(tagging => tagging.noteId === noteId);
};

// export const s
// export const selectNotes = function(state) {
//   return Object.values(state.entities.users.noteIds);
// };

// wrong
// export const selectAllNotebooks = function(state) {
//   return Object.values(
//     state.entities.users[state.session.id].authoredNotebookIds
//   );
// };
