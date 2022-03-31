class PostSerializer < ActiveModel::Serializer
  attributes :id, :comments, :likes, :image_url
  has_one :user
end