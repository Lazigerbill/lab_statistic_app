class DropTableEntry < ActiveRecord::Migration
  def change
    drop_table :entries
  end
end
