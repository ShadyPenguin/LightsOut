class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :level
      t.integer :fewest_moves
      t.string :best_player

      t.timestamps
    end
  end
end
