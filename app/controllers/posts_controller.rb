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
