class AddColumnCourseCodeToRecord < ActiveRecord::Migration
  def change
    add_column :records, :course_code, :string 
  end
end
