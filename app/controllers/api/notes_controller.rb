class Api::Notescontroller < ApplicationController 
  def index 

  end

  def create

  end

  def show

  end

  def update

  end

  def destroy

  end

  private 
  def note_params
    params.require(:notes).permit(:title, :content)
  end


end
