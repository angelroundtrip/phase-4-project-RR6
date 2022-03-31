snow = User.create(pet_name: "Snowflake", username: "Snowflake", bio: "Soft, sweet, playful syrian hammy that loves to climb and try new seeds", password: "abd" , pet_species: "Syrian Hamster", profile_image_url: "https://files.slack.com/files-pri/T02MD9XTF-F038J09S2E7/image_from_ios.jpg")

lala = User.create(  profile_image_url: "https://files.slack.com/files-pri/T02MD9XTF-F0383CAJ6QP/image_from_ios.jpg", username: "LalaTheHamster", password: "abc", bio: "I am a tiny, shy robo hamster. I will bite if you get too close but I really love you to be near me, just no touching! I love hemp seeds and walnuts best.", pet_name: "Lala", pet_species: "robo hamster")

test = User.create(pet_name: "test", username: "Test", bio: "1", password: "1", pet_species: "Test", profile_image_url: "https://files.slack.com/files-pri/T02MD9XTF-F038J09S2E7/image_from_ios.jpg")

argos =User.create( username: "ArgosTheDog", password: "abc", bio: "I am a floppy dog that loves belly rubs, long walks, playing, and drum beats", pet_name: "Argos", pet_species: "Dog")

Post.create(comments: nil, likes: 3, user_id: snow.id, image_url: "https://files.slack.com/files-pri/T02MD9XTF-F0383CAJ6QP/image_from_ios.jpg" )
Post.create(comments: nil, likes: 0, user_id: test.id, image_url: "https://files.slack.com/files-pri/T02MD9XTF-F038F48M9QV/img_1273.heic")
Post.create(comments: nil, likes: 1, user_id: snow.id, image_url: "https://files.slack.com/files-pri/T02MD9XTF-F038J09S2E7/image_from_ios.jpg")
Post.create(comments: nil, likes: 4, user_id: lala.id, image_url: "https://files.slack.com/files-pri/T02MD9XTF-F038BAMJJS2/image_from_ios.jpg" )



Post.create(comments: 'This is a comment', image_url: "https://files.slack.com/files-pri/T02MD9XTF-F0383CAJ6QP/image_from_ios.jpg", likes: 4, user_id: 1)
Post.create(comments: 'This is a SECOND comment', image_url: "https://files.slack.com/files-pri/T02MD9XTF-F0383CAJ6QP/image_from_ios.jpg", likes: 10, user_id: 1)

puts "Seeding complete!"