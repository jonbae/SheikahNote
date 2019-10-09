export const selectAllNotebooks = function(state) {
  return Object.values(state.entities.notebooks);
};

export const selectNotes = function(state) {
  return Object.values(state.entities.notes);
};
