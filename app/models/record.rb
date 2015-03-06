class Record < ActiveRecord::Base
  belongs_to :user

  validates :user_id, :contact_type, :patron, :time_spent, presence: true
  validates :satisfaction, :inclusion => {:in => [true, false], :message=>"cannot be blank."}
end
