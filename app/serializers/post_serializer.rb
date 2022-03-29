class PostSerializer < ActiveModel::Serializer
  attributes :id, :comments, :likes, :datetime
  has_one :user
end