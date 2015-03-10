class RecordsController < ApplicationController
  before_action :authenticate_user!

  
  def index
    @records = current_user.records.all
  end

  def new
    @record = Record.new
  end

  def create
    @record = current_user.records.build(record_params)
    if @record.save
      redirect_to new_record_path, notice: 'Record created successfully'
    else
      render 'records/new'
    end

  end

  def edit
    @record = Record.find(params[:id])
  end

  def update
  end

  def destroy
  end
end

private
def record_params
  params.require(:record).permit(:user_id, :contact_type, :patron, :question, :time_spent, :satisfaction, :bloomberg, :capital_iq, :factset, :thomsonone, :other, :course_code)
end

    