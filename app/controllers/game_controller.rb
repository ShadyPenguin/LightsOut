class GameController < ApplicationController
  def show
    @game = Game.find(params[:id])
    render "show", layout: false
  end
end