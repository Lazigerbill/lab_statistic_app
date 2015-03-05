class AddResourceColumnsToRecord < ActiveRecord::Migration
  def change
    add_column :records, :bloomberg, :boolean 
    add_column :records, :capital_iq, :boolean
    add_column :records, :factset, :boolean
    add_column :records, :thomsonone, :boolean
    add_column :records, :other, :string
  end
end
