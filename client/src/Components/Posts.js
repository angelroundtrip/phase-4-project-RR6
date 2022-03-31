// import {Link} from "react-router-dom";
import PostsForm from './PostsForm'
import PostsContainer from "./PostsContainer";
import React, {useEffect, useState} from "react";

function Posts({posts, setPosts, user, setUser}) {
  // const [posts, setPosts] = useState([])
  // const [searchValue, setSearchValue] = useState('')
  const addPostToState = post => setPosts( [post, ...posts] )
  // const changeSearchValue = e => setSearchValue(e.target.value )
  // const { comments, image_url, likes, user_id} = post
  
  console.log(posts)
  console.log(user)

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

       <h3 style={{color:'blue'}}>Hello, {user ? user.username : null}! </h3> 
       
       
       {/* <PostsForm addPostToState={addPostToState} /> */}
       {/* <Search changeSearchValue={changeSearchValue} /> */}
       {/* <PostsContainer user={user} posts={posts} /> */}
       <h1>hello world</h1>
      
      </main>
     
    );
  }
  
  export default Posts;