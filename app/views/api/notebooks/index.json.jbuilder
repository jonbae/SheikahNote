@notebooks.each do |notebook| 
    json.set! notebook.id do 
        json.partial! 'api/notebooks/notebook', notebook: notebook
    end
end




# json.array! @notebooks, :id, :title, :author_id, :updated_at

# alternatively

# json.array! @notebooks do |notebook| 
#     json.id notebook.id 
#     json.title notebook.title
# end
