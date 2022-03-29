class Post < ApplicationRecord
  belongs_to :user

  # def post_most_liked
  #   Post.all.map{|p|p.likes}.maximum
  # end
end
