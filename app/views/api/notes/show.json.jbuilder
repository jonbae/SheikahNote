json.note do 
    json.partial! "api/notes/note", note: note 
end

# json.tags do 
#     @tags.each do |tag| 
#         json.set! tag.id do 
#             json.extract! tag, :id, :name 
#         end
#     end
# end
