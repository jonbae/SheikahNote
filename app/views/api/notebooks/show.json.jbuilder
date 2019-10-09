debugger
json.notebook do 
    json.partial! "api/notebooks/notebook", notebook: @notebook
end

json.notes do
    @notes.each do |note| 
        json.set! note.id do 
            json.extract! note, :id, :title, :content, :updated_at, :notebook_id#, :tag_ids
        end
    end
end

