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


    return (
    <main>
    
       {/* <h3> {user_id.username} This is {user_id.pet_name}'s page!</h3> */}
       {/* <img alt = "profile pic" src= {image_url}>{image_url.img}</img> */}
       {/* <h5>$ {likes}{comments}</h5> */}
       
       <h3 style={{color:'blue'}}>{posts.comments}HELLO</h3>
       <PostsForm addPostToState={addPostToState} />
       {/* <Search changeSearchValue={changeSearchValue} /> */}
       <PostsContainer user={user}/>
      
      </main>
     
    );
  }
  
  export default Posts;