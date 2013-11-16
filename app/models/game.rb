class Game < ActiveRecord::Base
  has_many :attempts
  has_one :player, through: :attempts, source: :user
end
