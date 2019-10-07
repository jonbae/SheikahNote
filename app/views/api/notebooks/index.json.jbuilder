json.notebooks do 
    @notebooks.each do |notebook| 
        json.set! notebook.id do 
            json.extract! notebook, :id, :title, :author_id, :updated_at
        end
    end
end

json.notes do 
    @notebooks.each do |notebook| 
        notebook.notes.each do |note| 
            json.set! note.id do 
                json.extract! note, :id, :title, :author_id, :updated_at
            end
        end
    end
end


# json.array! @notebooks, :id, :title, :author_id, :updated_at

# alternatively

# json.array! @notebooks do |notebook| 
#     json.id notebook.id 
#     json.title notebook.title
# end

# json.notebooks do 
    # @notebooks.each do |notebook| 
    #     json.set! notebook.id do 
    #         notebook.extract! notebook :id, :title, :author_id, :updated_at
    #     end
    # end
# end

# json.notes do
#     @notebooks.each do |notebook| 
#         notebook.notes.each do |note| 
#             json.set! note.id do 
#                 note.extract! note :id,:title, :content, :author_id, :updated_at
#             end
#         end
#     end
# end
