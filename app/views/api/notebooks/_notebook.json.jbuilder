json.authorId notebook.author_id
json.noteIds notebook.note_ids
json.extract! notebook, :id, :title, :updated_at#,author_id
