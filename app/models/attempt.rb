class Attempt < ActiveRecord::Base
  belongs_to :user
  belongs_to :game

  after_save :check_high_score
  
  def check_high_score
    self.game.update_high_score(self.user.username, self.moves)
  end
end
