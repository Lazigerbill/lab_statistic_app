class EntryController < ApplicationController
  before_action :authenticate_user!, :except => :welcome
  
  def welcome
    
  end
  
  def index
  end

  def new
  end

  def show
  end

  def edit
  end
end
