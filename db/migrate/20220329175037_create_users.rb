class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :bio
      t.string :password_digest
      t.string :pet_name
      t.string :pet_species
      t.string :profile_image_url

      t.timestamps
    end
  end
end
