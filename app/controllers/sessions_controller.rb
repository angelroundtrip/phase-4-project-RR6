# class SessionsController < ApplicationController
#   before_action :set_session, only: %i[ show update destroy ]

#   # GET /sessions
#   def index
#     @sessions = Session.all

#     render json: @sessions
#   end

#   # GET /sessions/1
#   def show
#     render json: @session
#   end

#   # POST /sessions
#   def create
#     @session = Session.new(session_params)

#     if @session.save
#       render json: @session, status: :created, location: @session
#     else
#       render json: @session.errors, status: :unprocessable_entity
#     end
#   end

#   # PATCH/PUT /sessions/1
#   def update
#     if @session.update(session_params)
#       render json: @session
#     else
#       render json: @session.errors, status: :unprocessable_entity
#     end
#   end

#   # DELETE /sessions/1
#   def destroy
#     @session.destroy
#   end

#   private
#     # Use callbacks to share common setup or constraints between actions.
#     def set_session
#       @session = Session.find(params[:id])
#     end

#     # Only allow a list of trusted parameters through.
#     def session_params
#       params.fetch(:session, {})
#     end
# end

class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  def create

      user = User.find_by(username: params[:username])
     
      if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
      else 
          render json: {errors: ["Invalid username or password"] }, status: :unauthorized
      end 
  end 

  def destroy
      session.delete :user_id
      head :no_content
  end
end
