json.tagging do 
    json.partial! "api/taggings/tagging", tagging: @tagging
end

#json.tags do 
 #   @taggings.each do |tagging| 
  #      json.set! tagging.id do 
   #         json.extract! tag, :id, :name
    #    end
    #end
#end
