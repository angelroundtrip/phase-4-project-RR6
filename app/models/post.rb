class Post < ApplicationRecord
  belongs_to :user

  # def post_most_liked
  #   self.all.map{|p|p.comments}
  # end

  # def all_posts
  #   self.all
  # end
end
