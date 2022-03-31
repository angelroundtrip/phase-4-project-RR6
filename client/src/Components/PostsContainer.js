import Posts from './Posts'
import React from "react";
import PostsForm from './PostsForm';

function PostsContainer({posts, user, handlePost, setPosts}) {

 
  // * WE'RE GETTING EVERYONE'S POSTS RIGHT NOW
  // * WE WANT EVERYONE'S USERNAME, PHOTO, COMMENTS, LIKES and profile url
   
  console.log(posts)
  console.log(user)


    return (
     <div> 
        <PostsForm setPosts={setPosts} posts={posts}/>
        {/* {posts.map(post => <Posts  key={post.id} post={post} />)} */}
        {user.username}
    </div>
         
   
    );
  }
  
  export default PostsContainer;