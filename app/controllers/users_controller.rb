class UsersController < ApplicationController

  skip_before_action :authorize, only: [:create]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
  end

  def update 

    user = User.find(params[:id])
    user.update!(update_params)
    render json: user, status: :ok
end

  def show
      render json: @current_user
  end

  def destroy 
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :pet_name, :pet_species, :bio, :profile_image_url)
  end
  
  def update_params
    params.permit(:username, :password)
  end

end
