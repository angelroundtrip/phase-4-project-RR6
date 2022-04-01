import React from "react";
import PostsForm from './PostsForm';

function PostsContainer({posts, user, setPosts}) {

    return (
     <div> 

        <PostsForm setPosts={setPosts} posts={posts}/>
       
        {user.username}
        
    </div>    
   
    );
  }
  
  export default PostsContainer;
