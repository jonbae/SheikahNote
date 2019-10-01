class ApplicationController < ActionController::Base
  #CHELLL 

  helper_method :current_user,:logged_in? 

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def ensure_logged_in
    render json: { base: ['invalid credentials'] }, status: 401 unless current_user
  end

  def login(user) 
    @current_user = user 
    user.session_token = user.reset_session_token
  end

  def logged_in?
    !!current_user
  end

  def logout!
    current_user.reset_session_token! 
    session[:session_token] = nil 
    @current_user = nil #minor safety procedure 
  end



end
