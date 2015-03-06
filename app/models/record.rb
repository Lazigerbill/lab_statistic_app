class Record < ActiveRecord::Base
  belongs_to :user

  validates :user_id, :contact_type, :patron, :question, :time_spent, :satisfaction, presence: true
end

