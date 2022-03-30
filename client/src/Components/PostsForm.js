import React, { useState} from 'react'

function PostsForm({ errors, addPostToState}) {
  
  const [imageURL, setImageURL] =useState("")
  const [comments, setComments] = useState("")
  const [likes, setLikes] = useState (0)

  const createPost = (e) => {
    e.preventDefault()

   const newPost= {comments, imageURL, likes}
    addPostToState( newPost)
    console.log(newPost)
  }
  
    return (
      <div className="App" >
        {errors?errors.map(e => <div>{e}</div>):null}
       <form onSubmit={createPost}>
        <label>
        Image URL (grab a url of your fave pet image!)
          <input type="text" name="image_url" onChange={(e) => setImageURL(e.target.value)} />
        </label>
        <br/>
       <label>
          Comments
          <input type="text" name="comment" onChange={(e) => setComments(e.target.value)} />
        </label>
        <br/>
        {/* <label>
        Likes
          <input type="number" name="likes"  onChange={(e) => setLikes(e.target.value)} />
        </label> */}
        <button type="submit"> Add New Petsagram Post </button>
       </form>
      </div>
    );
  }
  
  export default PostsForm;