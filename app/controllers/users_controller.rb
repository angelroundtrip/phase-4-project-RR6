# class UsersController < ApplicationController
#   before_action :set_user, only: %i[ show update destroy ]

#   # GET /users
#   def index
#     @users = User.all

#     render json: @users
#   end

#   # GET /users/1
#   def show
#     render json: @user
#   end

#   # POST /users
#   def create
#     @user = User.new(user_params)

#     if @user.save
#       render json: @user, status: :created, location: @user
#     else
#       render json: @user.errors, status: :unprocessable_entity
#     end
#   end

#   # PATCH/PUT /users/1
#   def update
#     if @user.update(user_params)
#       render json: @user
#     else
#       render json: @user.errors, status: :unprocessable_entity
#     end
#   end

#   # DELETE /users/1
#   def destroy
#     @user.destroy
#   end

#   private
#     # Use callbacks to share common setup or constraints between actions.
#     def set_user
#       @user = User.find(params[:id])
#     end

#     # Only allow a list of trusted parameters through.
#     def user_params
#       params.require(:user).permit(:username, :bio, :password_digest, :pet_name, :pet_species, :profile_image_url)
#     end
# end

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
