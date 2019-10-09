export const selectAllNotebooks = function(state) {
  debugger;
  let allNotebooks = Object.values(state.entities.notebooks);
  return allNotebooks.filter(
    // alternatively
    // notebook => notebook.author_id === state.session.id
    notebook =>
      state.entities.users[state.session.id].authoredNotebookIds.includes(
        notebook.id
      )
  );
};

// export const selectNotes = function(state) {
//   return Object.values(state.entities.users.noteIds);
// };

// wrong
// export const selectAllNotebooks = function(state) {
//   debugger;
//   return Object.values(
//     state.entities.users[state.session.id].authoredNotebookIds
//   );
// };
