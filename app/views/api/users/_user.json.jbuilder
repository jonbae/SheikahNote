json.authoredNotebookIds user.notebook_ids
json.authoredNoteIds user.note_ids 
json.extract! user, :id, :username, :email#, :authoredNotebookIds, :authoredNoteIds