class User < ApplicationRecord
  has_many :posts
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :password, :password_confirmation, :pet_name, :pet_species, :profile_image_url, presence:true
end
