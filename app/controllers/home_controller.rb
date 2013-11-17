class HomeController < ApplicationController
  def index
    redirect_to profile_path(current_user) if current_user
  end
end