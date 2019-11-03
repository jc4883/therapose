class Api::RequestsController < ApplicationController
  def index 
    user = User.find_by(id: params[:user_id])
    if user.role == "therapist"
        @requests = user.requests_of_therapist
    else
        @requests = user.requests_of_patient
    end
    render "api/requests/index"
  end


  def create
    @request = Request.new(request_params)
    if @request.save
      @user = User.find(params[:request][:user_id])
      render "api/requests/show"
    else 
      render json: @request.errors.full_messages
    end
  end

  def update
    # debugger
    @request = Request.find(params[:id]) 
    # debugger
    if @request.update_attributes(request_params)
      # debugger
      render "api/requests/show"
    else
      # debugger
      render json: ["unable to update request"]
    end
  end

  def destroy
    @request = Request.find_by(id: params[:id])
    @request.destroy
    render "api/requests/show"
  end

private
#we don't save user_id to database
  def request_params 
    params.require(:request).permit(:done, :patient_id, :description, :therapist_id)
  end

end
