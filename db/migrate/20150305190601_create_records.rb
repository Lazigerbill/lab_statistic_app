class CreateRecords < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.belongs_to :user, index: true
      t.string :contact_type
      t.string :patron
      t.string :question
      t.integer :time_spent
      t.boolean :satisfaction

      t.timestamps
    end
  end
end
