class Attempt < ActiveRecord::Base
  belongs_to :user
  belongs_to :game

  def increment_moves
    this.moves += 1
    this.save
  end

  def complete!
    this.completed = true
    this.save
    check_high_score
  end

  def check_high_score
    @score = this.moves
    @player = this.user.username
    this.game.update_high_score
  end
end
