import {Link} from "react-router-dom";

function Posts({post, allPosts}) {
    const { comments, image_url, likes, user_id} = post
    console.log(post)
    return (
    <div>
    
       <h3> {user_id.username} This is {user_id.pet_name}'s page!</h3>
       <img alt = "profile pic" src= {image_url}>{image_url.img}</img>
       <h5>$ {likes}{comments}</h5>
       
      
      </div>
     
    );
  }
  
  export default Posts;