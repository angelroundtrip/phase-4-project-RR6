import Posts from './Posts'
import React from "react";

function PostsContainer({posts, user}) {

  // * WE'RE GETTING EVERYONE'S POSTS RIGHT NOW
  // * WE WANT EVERYONE'S USERNAME, PHOTO, COMMENTS, LIKES and profile url
     

    return (
     <div> 
       {/* {Posts.comments} */}
         {/* { posts.map(post =>
        <Posts  key={post.id} post={post} />)} */}
    </div>
         
   
    );
  }
  
  export default PostsContainer;