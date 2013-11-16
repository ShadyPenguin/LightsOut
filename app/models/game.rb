class Game < ActiveRecord::Base
  has_many :attempts
  has_many :players, through: :attempts, source: :user

  def update_high_score(username, moves)
    if moves < self.fewest_moves
      self.fewest_moves = moves
      self.best_player = username
      self.save
    end
  end
end
