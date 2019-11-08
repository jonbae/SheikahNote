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

export const selectNote = function(state, noteId) {
  return state.entities.notes[noteId];
};

export const selectNotebook = function(state, notebookId) {
  return state.entities.notebooks[notebookId];
};

// export const selectNotes = function(state) {
//   return Object.values(state.entities.users.noteIds);
// };

// wrong
// export const selectAllNotebooks = function(state) {
//   return Object.values(
//     state.entities.users[state.session.id].authoredNotebookIds
//   );
// };
