class Api::UsersController < ApplicationController
  # before_action :require_logged_in, except: [:create]
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def fetchTherapists
    #get all therapists in the region specializing in this category
    #find_by(category: params[:category])
    @users = User.where(role: 'therapist', region: params[:region], category: params[:category])
    render "api/users/index"
  end

  def fetchPatients
    #get all patients in therapist's region
    @users = User.where(role: 'patient', region: params[:region], category: params[:category])
    render "api/users/index"
  end

private 
  def user_params
    #Remeber when testing ajax, user must nest data as follows: data: {user: {username: testUsrnm, password: testPsswrd}}
    params.require(:user).permit(:username, :password, :region, :category)
  end

end
