class UserController < ApplicationController
  before_filter :prevent_unauthorized_access, only: :profile

  def profile
  end

  def sign_up
    user = User.create(user_params)
    session[:user_id] = user.id if user
    redirect_to profile_path(user)
  end

  def login
    user = User.find_by_email(params[:user][:email]).try(:authenticate, params[:user][:password])
    session[:user_id] = user.id if user
    redirect_to profile_path(user)
  end

  def logout
    reset_session
    redirect_to root_path
  end

  private
    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end

end