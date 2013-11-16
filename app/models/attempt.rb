class Attempt < ActiveRecord::Base
  belongs_to :user
  belongs_to :game

  after_save :check_high_score
  
  def check_high_score
    @score = this.moves
    @player = this.user.username
    this.game.update_high_score
  end
end
