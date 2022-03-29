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
  # skip_before_action :authorize, only: [:create]

  def index
    render json: User.all
  end

  # def show
  #   render json: User.find_by(id: session[:user_id]), status: :ok
  # end
  # def show
  #   render json: @current_user
  # end
  # def show
  #   currentUser = User.find(session[:user_id])
  #   render json: currentUser, status: :ok
  # end
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end
  
  # POST signup
  def create
    render json: User.create!(user_params), status: :created
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :pet_name, :pet_species, :bio, :profile_image_url)
  end

end
