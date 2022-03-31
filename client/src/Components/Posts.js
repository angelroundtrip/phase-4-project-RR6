import React, {useEffect, useState} from "react";
// import {Link} from "react-router-dom";
import PostsForm from './PostsForm'
import PostsContainer from "./PostsContainer";
import { Card, Button,Image } from "semantic-ui-react";

function Posts({posts, setPosts, user, setUser}) {
  // const [posts, setPosts] = useState([])
  // const [searchValue, setSearchValue] = useState('')
  const addPostToState = post => setPosts( [post, ...posts] )
  // const changeSearchValue = e => setSearchValue(e.target.value )
  // const { comments, image_url, likes, user_id} = post
  
  // * Mapping here, even in the console, breaks the page. Have to refresh to see content after logging in
  // console.log(posts.map(post => post.comments))
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
       <h1>Hello World</h1>
       
       
       {/* <PostsForm addPostToState={addPostToState} /> */}
       {/* <Search changeSearchValue={changeSearchValue} /> */}
       {/* <PostsContainer user={user} posts={posts} /> */}

        {/* <h1>{user ? posts.map(post => post.comments): null}</h1> */}
        
       

        <div className="card">
    {/* <div style={{padding: '3%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s'}} className="ui cards"> */}
         {/* <Card style={!openRoom ? {border: '5px solid #C1BBDA'}: {border : '5px solid red'}}
            header={room.room_number}
            image={room.imgUrl}
            meta={room.price}
            description={room.room_type}
            extra={extra}
        /> */}
        <Card >
        {/* <Card style={!openRoom ? {border: '3px solid navy'}: {backgroundColor : 'red'}}> */}
      <Card.Content>
        <Image
          // src={post.imgUrl}
        />
        <Card.Description style={{fontWeight: 'bolder', fontSize: '20px', marginTop: '3%'}}>  </Card.Description>
        <Card.Meta> ${room.price} / night</Card.Meta>
        <Card.Meta>{ openRoom ? `${room.reservations[room.reservations.length -1].guest.name} is staying in Room ${room.room_number} from ${room.reservations[room.reservations.length -1].check_in} to ${room.reservations[room.reservations.length -1].check_out}` : `Room ${room.room_number}`}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
            {/* {extra}
            {extra2} */}
        </div>
      </Card.Content>
    </Card>
    </div>
      
      </main>
     
    );
  }
  
  export default Posts;