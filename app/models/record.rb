class Record < ActiveRecord::Base
  belongs_to :user

  validates :user_id, :contact_type, :patron, :time_spent, :question, presence: true
  validates :satisfaction, :inclusion => {:in => [true, false], :message=>"cannot be blank."}

  def self.created_after(time)
    where("created_at > ?", time)
  end
end
