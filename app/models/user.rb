class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates  :pet_name, :pet_species, :profile_image_url, presence:true
  validates :password, {presence: true, on: :create}
end