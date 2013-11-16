class CreateAttempts < ActiveRecord::Migration
  def change
    create_table :attempts do |t|
      t.belongs_to :user
      t.belongs_to :game
      t.integer :moves, default: 0
      t.boolean :completed, default: false

      t.timestamps
    end
  end
end
