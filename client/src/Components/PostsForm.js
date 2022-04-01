import React, { useState} from 'react'

function PostsForm({ errors, posts, setPosts}) {
  
  const [image_url, setImageURL] =useState("")
  const [comments, setComments] = useState("")
  const [likes, setLikes] = useState (0)

  function handleURL(e){
    setImageURL(e.target.value)
  }
  function handleComment(e){
    setComments(e.target.value)
  }

  function handleSubmitNewPost(e){
    e.preventDefault()
    const formInputData = {
      image_url: image_url,
      comments: comments
    }
    // update state array with all posts plus new post
    const newPostArray=[formInputData,...posts]
    setPosts(newPostArray)
    // clear the fields
    setImageURL("")
    setComments("");
    // post request to persist data
    fetch("/posts",{
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInputData),
       
      })
      .then(r=>r.json())
      .then(console.log); 
    
    
  }
  
    return (
      <div style={{textAlign:'center', marginTop: '40px'}} className="App" >

        {errors?errors.map(e => <div>{e}</div>):null}

       <form onSubmit={handleSubmitNewPost}>

        {/* <label>
            Image URL (grab a url of your fave pet image!)
          <input type="text" name="image_url" value={image_url} onChange={handleURL} />
        </label>
        <br/> */}

    <span>
       <label>
          Comments:
          <input style={{marginLeft:'10px', }} type="text" name="comment" value={comments} onChange={handleComment} />
        </label>
        {/* <br/> */}
        
        
        {/* <label>
        Likes
          <input type="number" name="likes"  onChange={(e) => setLikes(e.target.value)} />
        </label> */}
        <button style={{backgroundColor:'teal', marginLeft:'20px'}}type="submit" > Add Comment </button>
        </span>
       </form>
      </div>
    );
  }
  
  export default PostsForm;
  