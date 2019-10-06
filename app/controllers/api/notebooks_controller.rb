class Api::NotebooksController < ApplicationController 
  before_action :ensure_logged_in
  def create
    @notebook = Notebook.new(notebook_params)
    render :show 
  end

  def index
    @notebooks = Notebook.all
  end

  def show

  end

  def update

  end

  def destory

  end

  private
  def notebook_params
    params.require(:notebook).permit(:title, :author_id, :updated_at)
  end

end
