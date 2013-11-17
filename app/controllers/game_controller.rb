class GameController < ApplicationController
  def show
    @game = Game.find(params[:id])
    render "show", layout: false
  end

  def leader
    @completed = {}
    Game.all.each do |game|
      @completed[game.level] = true if game.best_player
    end
  end

  def top_scores
    @leaders = []
    Attempt.all.where(game_id: params[:id]).sort_by{|g| g.moves}.each do |attempt|
      break if @leaders.length == 10
      @leaders.push([User.find(attempt.user_id).username,attempt.moves])
    end

  end

  def end
    current_user.attempts.create(game_id: params[:id], moves: params[:moves])
    redirect_to profile_path(current_user)
  end
end