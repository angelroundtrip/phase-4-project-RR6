class ApplicationController < ActionController::API
  include ActionController::Cookies

<<<<<<< HEAD
  before_action :authorize
  # 

  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  private

  def not_found(invalid)
      render json: {error: "#{invalid.model} not found"}, status: 404
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: 422
  end

  
  def authorize
    @current_user = User.find_by(id: session[:user_id])
    return render json: { error: "Not authorized" }, status: :unauthorized unless @current_user
  end
=======
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

>>>>>>> main
end