
json.authorId note.author_id
json.notebookId note.notebook_id 

json.extract! note, :id, :title, :content, :updated_at 