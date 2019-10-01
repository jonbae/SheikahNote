class Api::Notebookscontroller < ApplicationController 
  def create

  end

  def index

  end

  def show

  end

  def update

  end

  def destory

  end

  private
  def notebook_params
    params.require(:notebook).permit(:title)
  end

end
