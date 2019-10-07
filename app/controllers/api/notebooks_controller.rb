class Api::NotebooksController < ApplicationController 
  before_action :ensure_logged_in
  def create
    @notebook = Notebook.new(notebook_params)
    render :show 
  end

  def index
    notebooks = Notebook.all
    notebooks = notebooks.where(author_id: @current_user.id)
    @notebooks = notebooks.includes(:notes) # I think? 
  end

  def show

  end

  def update

  end

  def destroy
    @notebook = Notebook.find(params[:id])
    @notebook.destroy

    render :index 
  end

  private
  def notebook_params
    params.require(:notebook).permit(:title, :author_id, :updated_at)
  end

end
