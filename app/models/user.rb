class User < ActiveRecord::Base
  has_secure_password

  has_many :attempts
  has_many :completed_games, through: :attempts, source: :game
end
