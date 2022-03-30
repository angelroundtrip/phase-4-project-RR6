import React, { useState} from 'react'

function PostsForm({ errors, addPostToState}) {
  
  const [username, setUsername] = useState("")
  const [imageURL, setImageURL] =useState("")
  const [likes, setLikes] = useState (0)

  const createPost = (e) => {
    e.preventDefault()

   const newPost= {username, imageURL, likes}
    addPostToState( newPost)
    console.log(newPost)
  }
  
    return (
      <div className="App">
        {errors?errors.map(e => <div>{e}</div>):null}
       <form onSubmit={createPost}>
       <label>
          Username
          <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br/>
        <label>
        Image URL (grab a url of your fave pet image!)
          <input type="text" name="image_url" onChange={(e) => setImageURL(e.target.value)} />
        </label>
        <br/>
        <label>
        Likes
          <input type="number" name="likes"  onChange={(e) => setLikes(e.target.value)} />
        </label>
        <button type="submit"> Add New Petsagram Post </button>
       </form>
      </div>
    );
  }
  
  export default PostsForm;