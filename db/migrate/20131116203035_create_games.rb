class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :level
      t.string :board
      t.integer :fewest_moves, default: 100_000_000
      t.string :best_player

      t.timestamps
    end
  end
end
