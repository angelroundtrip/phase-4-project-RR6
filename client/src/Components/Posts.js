import React, {useEffect, useState} from "react";
// import {Link} from "react-router-dom";
import PostsForm from './PostsForm'
import PostsContainer from "./PostsContainer";
import { Card, Button,Image } from "semantic-ui-react";
import UserUpdateForm from "./UserUpdateForm"

function Posts({posts, setPosts, user, setUser, errors}) {
  // const [posts, setPosts] = useState([])
  // const [searchValue, setSearchValue] = useState('')
  // const addPostToState = post => setPosts( [post, ...posts] )
  // const changeSearchValue = e => setSearchValue(e.target.value )
  // const { comments, image_url, likes, user_id} = post
  
  // * Mapping here, even in the console, breaks the page. Have to refresh to see content after logging in
  // console.log(posts.map(post => post.comments))
  // console.log(user.username.posts)
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

      <hr></hr>
       <h3 style={{color:'blue', textAlign:'center'}}>  {user ? user.username : 'Please login!'} </h3> 
       {/* <img src={user ? user.post.image_url : null } alt="pic"/> */}
       <hr></hr>
       <PostsForm  errors={errors} posts={posts} setPosts={setPosts} />
    
       {/* <Card style={{color:'blue'}}> POST 1 {user ? user.posts : null} </Card> 
       <Card style={{color:'blue'}}> POST 2 {user ? user.posts : null} </Card>  */}

       
       {user ? <Card> <h3 style={{textAlign:'center'}}>@nekolover</h3> <Image  className="center" style={{align:'center'}} src="https://c.files.bbci.co.uk/151AB/production/_111434468_gettyimages-1143489763.jpg"/> <h3 style={{textAlign:'center'}}>Fun fact: The Japanese word for cat is neko</h3></Card> : null} 
       
       {user ? <Card> <h3 style={{textAlign:'center'}} style={{textAlign:'center'}}>@Snowflake</h3> <Image  className="center" style={{align:'center'}}  src="https://www.genengnews.com/wp-content/uploads/2021/08/ricky-kharawala-adK3Vu70DEQ-unsplash-scaled-e1628706903421.jpg"/> <h3> I am soft! </h3>   </Card> : null} 
       
      



       {/* <Search changeSearchValue={changeSearchValue} /> */}
       {/* <PostsContainer user={user} posts={posts} /> */}

        {/* <h1>{user ? posts.map(post => post.comments): null}</h1> */}
        
       

        
      
      </main>
     
    );
  }
  
  export default Posts;