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
<<<<<<< HEAD
  debugger;
  // return allTags.filter(tag => tag.authorId == state.session.id);
  return allTags.filter(tag =>
    state.entities.users[state.session.id].authoredTagIds.includes(tag.id)
  );
=======
  return allTags.filter(tag => tag.taggingIds.length !== 0);
  // debugger;
  // return allTags.filter(tag =>
  //   state.entities.users[state.session.id].authoredTagIds.includes(tag.id)
  // );
  // return allTags.filter( tag => state.entities.users[state.session.id].)
  // return allTags;
>>>>>>> test
};

export const selectTaggedNotes = function(state, tagId) {
  let notes = Object.values(state.entities.notes);
  // debugger;
  return notes.filter(note => note.tagIds.includes(tagId));
};
//test
export const selectNoteTags = function(state, noteId) {
  // let tags = Object.values(state.entities.tags);
  // return tags.filter(tag => tag.noteIds.includes(noteId));
  let noteTaggings = selectNoteTaggings(state, noteId);
  return Object.values(state.entities.tags).filter(tag => {
    const tagInTagging = noteTaggings.filter(tagging => {
      return tagging.tagId === tag.id;
    });

    return tagInTagging.length > 0;
  });
};

export const selectNoteTaggings = function(state, noteId) {
  let taggings = Object.values(state.entities.taggings);
  return taggings.filter(tagging => tagging.noteId === noteId);
};

export const selectTaggingTags = function(state, taggingId) {
  let tags = Object.values(state.entities.tags);
  return tags.filter(tag => tag.taggingId === taggingId);
};

export const selectTaggingFromTag = (taggings, tag) => {
  return taggings.find(tagging => tag.id === tagging.tagId);
};

// export const findTagsForSelectedNote = (state, noteId = state.ui.selectedNoteId) => {
//   if (!state.ui.selectedNoteId) {
//     return {};
//   }

//   const taggingsForSelectedNote = findTaggingsForSelectedNote(state, noteId);

//   if (Object.keys(taggingsForSelectedNote).length === 0) {
//     return {};
//   }
//   return pickBy(state.entities.tags, (tag, tagId) => {

//     const tagExistsInTaggings =
//       Object.keys(pickBy(taggingsForSelectedNote, (tagging, taggingId) => {
//         return tagging.tag_id === tag.id;
//         // console.log(`taging tag id: ${tagging.tag_id}, tag id: ${tag.id}`)

//       })).length > 0;
//     // console.log(`tagExistsInTaggings: ${tagExistsInTaggings}`)

//     return tagExistsInTaggings;
//   })
// }

// export const selectNotes = function(state) {
//   return Object.values(state.entities.users.noteIds);
// };

// wrong
// export const selectAllNotebooks = function(state) {
//   return Object.values(
//     state.entities.users[state.session.id].authoredNotebookIds
//   );
// };
