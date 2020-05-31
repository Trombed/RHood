class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    # protect_from_forgery with: :exception
    helper_method :current_user, :logged_in?
    def allow_cross_domain_ajax
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Request-Method'] = 'POST, OPTIONS'
    end
  
    def current_user
      @current_user ||= User.find_by(session_token: session[:session_token])
    end
  
    def login(user)
      @current_user = user
      session[:session_token] = user.reset_session_token!
    end
  
    def logged_in?
      !!current_user
    end
  
    def logout
      current_user.reset_session_token!
      session[:session_token] = nil
      
    end
  
    def require_login
      redirect_to api_session_url if !logged_in?
    end
  
  end
  