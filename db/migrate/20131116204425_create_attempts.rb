class CreateAttempts < ActiveRecord::Migration
  def change
    create_table :attempts do |t|
      t.belongs_to :user
      t.belongs_to :game
      t.integer :moves

      t.timestamps
    end
  end
end
