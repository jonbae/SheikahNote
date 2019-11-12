class Api::NotesController < ApplicationController 
  before_action :ensure_logged_in
  #add tags to all of these 
 

  def create
    @note = Note.new(note_params)
    @note.author_id = current_user.id 
    debugger
    if @note.save 
      render :show
    else
      render json:@note.errors.full_messages, status: 422 
    end

  end

  def index 
    @notes = Note.where(author_id: @current_user.id)
  end

  def show
    @note = current_user.notes.find(params[:id])
    @note.author_id = current_user.id
    if @note.save! 
      render :show
    else
      render json:@note.errors.full_messages, status: 422
    end

  end

  def update
    @note = current_user.notes.find(params[:id])
    if @note.update(note_params)
      render :show
    else 
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = current_user.notes.find(params[:id])
    @note.destroy 
    render json: @note 
  end

  private 
  def note_params
    params.require(:note).permit(:title, :content, :author_id, :notebook_id, :updated_at)
  end


end
