export const selectAllNotebooks = function(state) {
  console.log(state.entities.notebooks);

  return Object.values(state.entities.notebooks);
};
