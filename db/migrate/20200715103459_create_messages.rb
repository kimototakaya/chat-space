class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.string :content
      t.string :image 
      t.references :group, foreign_hey: true
      t.references :user, foreign_hey: true
      t.timestamps
    end
  end
end
