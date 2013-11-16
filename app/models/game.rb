class Game < ActiveRecord::Base
  has_many :attempts
  has_one :player, through: :attempts, source: :user

  def update_high_score
    if @score < this.fewest_moves
      this.fewest_moves = @score 
      this.best_player = @player
    end
  end
end
