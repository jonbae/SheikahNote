
json.authorId note.author_id
json.notebookId note.notebook_id 
json.tagIds note.tag_ids
json.extract! note, :id, :title, :content, :updated_at 