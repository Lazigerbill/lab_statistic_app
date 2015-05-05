class RecordsController < ApplicationController
  before_action :authenticate_user!

  
  def index
    @records = Record.all
    # @daysago = Record.created_after(7.days.ago)
    @monthago = Record.created_after(1.month.ago)
    respond_to do |format|
      format.html
      format.json {render :json => @records}
    end
  end

  def my_index
    @records = current_user.records.all

  end

  def report

    
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
    @record = Record.find(params[:id])

    if @record.update_attributes(record_params)
      redirect_to records_path
    else
      render :edit
    end
  end

  def destroy
    @record = Record.find(params[:id])
    @record.destroy
    redirect_to records_url
  end
end

private
def record_params
  params.require(:record).permit(:user_id, :contact_type, :patron, :question, :time_spent, :satisfaction, :bloomberg, :capital_iq, :factset, :thomsonone, :other_inquiry_details, :course_code, :other_res, :other_res_details)
end

    