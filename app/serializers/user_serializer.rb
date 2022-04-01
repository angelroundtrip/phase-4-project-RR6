class UserSerializer < ActiveModel::Serializer

  attributes :id, :username, :bio, :password_digest, :pet_name, :pet_species, :profile_image_url
  
end
