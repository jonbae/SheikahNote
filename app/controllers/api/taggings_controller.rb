class Api::TaggingsController < ApplicationController 
    before_action :ensure_logged_in 

    def create
        @tagging = Tagging.new(tagging_params)
        # @tagging.note_id 
        # @tagging.tag_id
        unless params[:tagging][:tag_id]
            tag = Tag.find_by(name: params[:tagging][:name])
            unless tag
                tag = Tag.create(author_id: current_user.id, name: params[:tagging][:name])
            end
            @tagging.tag_id = tag.id
        end

        if @tagging.save
            render :show
        else
            render json:@tagging.errors.full_messages, status: 422
        end
    end

    def index 
        @taggings = current_user.taggings
    end

    def destroy
        @tagging = Tagging.find(params[:id])
        # @tagging = Tagging.find_by(tag_id: params[:tagging][:tag_id], note_id: params[:tagging][:note_id])
        @tagging.destroy
        @tag = Tag.find(params[:tagging][:tag_id])
        render "api/tags/show"
    end
    
    private
    def tagging_params 
        params.require(:tagging).permit(:tag_id, :note_id)
    end

end
