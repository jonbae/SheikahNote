json.array! @notebooks, :id, :title, :author_id

# alternatively

# json.array! @notebooks do |notebook| 
#     json.id notebook.id 
#     json.title notebook.title
# end
