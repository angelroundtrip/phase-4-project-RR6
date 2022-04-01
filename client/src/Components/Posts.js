import React from "react";
import PostsForm from './PostsForm'
import { Card, Image } from "semantic-ui-react";

function Posts({posts, setPosts, user, errors}) {
  
  console.log(user)
  console.log(posts)

  return (
    <main>
    
      <span style={{fontFamily: 'cursive',fontSize: '50px', fontWeight: 'bold', color: 'hotpink', textDecoration: 'none' }}>Petsagram</span>

      <hr></hr>
       <h3 style={{color:'blue', textAlign:'center'}}>  {user ? user.username : 'Please login!'} </h3> 

       <hr></hr>

       {user ? <PostsForm  errors={errors} posts={posts} setPosts={setPosts} /> : null}
       
       {user ? <Card> <h3 style={{textAlign:'center'}}>@nekolover</h3> <Image  className="center" style={{align:'center'}} src="https://c.files.bbci.co.uk/151AB/production/_111434468_gettyimages-1143489763.jpg"/> <h3 style={{textAlign:'center'}}>Fun fact: The Japanese word for cat is neko</h3></Card> : null} 
       
       {user ? <Card> <h3 style={{textAlign:'center'}} >@Snowflake</h3> <Image  className="center" style={{align:'center'}}  src="https://www.genengnews.com/wp-content/uploads/2021/08/ricky-kharawala-adK3Vu70DEQ-unsplash-scaled-e1628706903421.jpg"/> <h3> I am soft! </h3>   </Card> : null} 

       {user ? <Card> <h3 style={{textAlign:'center'}} >@Snowflake</h3> <Image  className="center" style={{align:'center'}}  src="https://www.genengnews.com/wp-content/uploads/2021/08/ricky-kharawala-adK3Vu70DEQ-unsplash-scaled-e1628706903421.jpg"/> <h3> I am soft! </h3>   </Card> : null} 
       
    </main>
     
    );
  }
  
  export default Posts;
  