class ModifyOtherQuestions < ActiveRecord::Migration
  def change
    add_column :records, :other_inquiry_details, :string
    add_column :records, :other_res, :boolean
    remove_column :records, :other
    add_column :records, :other_res_details, :string
  end
end
