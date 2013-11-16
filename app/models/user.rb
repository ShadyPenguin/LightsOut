class User < ActiveRecord::Base
  has_secure_password

  has_many :attempts
  has_many :games_played, through: :attempts, source: :games
end
