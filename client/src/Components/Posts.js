import React, {useEffect, useState} from "react";
// import {Link} from "react-router-dom";
import PostsForm from './PostsForm'
import PostsContainer from "./PostsContainer";
// import { Card, Button,Image } from "semantic-ui-react";

function Posts({posts, setPosts, user, setUser}) {
  // const [posts, setPosts] = useState([])
  // const [searchValue, setSearchValue] = useState('')
  const addPostToState = post => setPosts( [post, ...posts] )
  // const changeSearchValue = e => setSearchValue(e.target.value )
  // const { comments, image_url, likes, user_id} = post
  
  // * Mapping here, even in the console, breaks the page. Have to refresh to see content after logging in
  // console.log(posts.map(post => post.comments))
  console.log(user)
  console.log(posts)

  // const searchedPosts = posts.filter(post => {
  //   const lowerName = post.name.toLowerCase()
  //   const lowerSearch = searchValue.toLowerCase()
  //   return lowerName.includes( lowerSearch )
  // }) 

  // useEffect(() => {
  //   fetch('/posts')
  //     .then( r => r.json() )
  //     .then( setPosts )
  // }, [])
  // console.log(posts)


    return (
    <main>
    
      <span style={{fontFamily: 'cursive',fontSize: '50px', fontWeight: 'bold', color: 'hotpink', textDecoration: 'none'}}>Petsagram</span>

       <h3 style={{color:'blue'}}>Welcome  {user ? user.username : null} </h3> 
       {/* <img src={user ? user.post.image_url : null } alt="pic"/> */}
       
       
       {/* <PostsForm addPostToState={addPostToState} /> */}
       {/* <Search changeSearchValue={changeSearchValue} /> */}
       {/* <PostsContainer user={user} posts={posts} /> */}

        {/* <h1>{user ? posts.map(post => post.comments): null}</h1> */}
        
       

        
      
      </main>
     
    );
  }
  
  export default Posts;