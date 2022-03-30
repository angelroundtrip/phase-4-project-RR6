import Posts from './Posts'
import React from "react";

function PostsContainer({posts}) {

     

    return (
     <div> 
         { posts.map(post =>
        <Posts  key={post.id} post={post} />)}
    </div>
         
   
    );
  }
  
  export default PostsContainer;