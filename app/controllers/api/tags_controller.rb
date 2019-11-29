class Api::TagsController < ApplicationController 
    before_action :ensure_logged_in 


    def create 
        @tag = Tag.new(tag_params) 
        @tag.author_id = current_user.id 
        if @tag.save 
            render :show
        else 
            render json:@tag.errors.full_messages, status: 422
        end    
    end


    def index 
        @tags = Tag.where(author_id: @current_user.id) 
    end

    def destroy 
        @tag = current_user.tags.find(params[:id])
        @tag.destroy
        render json: @tag
    end


    private 
    def tag_params
        params.require(:tag).permit(:name, :author_id)
    end

end
