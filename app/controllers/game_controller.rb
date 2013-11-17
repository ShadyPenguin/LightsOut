class GameController < ApplicationController
  def show
    @game = Game.find(params[:id])
    render "show", layout: false
  end

  def end
    current_user.attempts.create(game_id: params[:id], moves: params[:moves])
    redirect_to profile_path(current_user)
  end
end