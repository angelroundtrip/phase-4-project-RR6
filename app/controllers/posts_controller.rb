# class PostsController < ApplicationController
#   before_action :set_post, only: %i[ show update destroy ]

#   # GET /posts
#   def index
#     @posts = Post.all

#     render json: @posts
#   end

#   # GET /posts/1
#   def show
#     render json: @post
#   end

#   # POST /posts
#   def create
#     @post = Post.new(post_params)

#     if @post.save
#       render json: @post, status: :created, location: @post
#     else
#       render json: @post.errors, status: :unprocessable_entity
#     end
#   end

#   # PATCH/PUT /posts/1
#   def update
#     if @post.update(post_params)
#       render json: @post
#     else
#       render json: @post.errors, status: :unprocessable_entity
#     end
#   end

#   # DELETE /posts/1
#   def destroy
#     @post.destroy
#   end

#   private
#     # Use callbacks to share common setup or constraints between actions.
#     def set_post
#       @post = Post.find(params[:id])
#     end

#     # Only allow a list of trusted parameters through.
#     def post_params
#       params.require(:post).permit(:posts, :image_url, :likes, :user_id)
#     end
# end

class PostsController < ApplicationController

  def index
    render json: Post.all
  end

  def show
    post = Post.find(params[:id])
    render json: post, status: :ok
  end

  def update 
    post = Post.find(params[:id])
    post.update!(post_params)
    render json: post, status: :ok
  end

  def create
 
    newPost = Post.new(post_params)
    newPost.likes= 0
    newPost.user_id = @current_user.id
    newPost.save
    render json: newPost, status: :created

  end

  def destroy 
    post = Post.find(params[:id])
    post.destroy
    head :no_content
  end

  private
  
  def post_params
    params.permit(:image_url, :comments)
  end
end
