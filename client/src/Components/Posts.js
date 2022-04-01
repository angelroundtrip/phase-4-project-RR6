import React from "react";
import PostsForm from './PostsForm'
import { Card, Image } from "semantic-ui-react";

function Posts({posts, setPosts, user, errors}) {
  
  console.log(user)
  console.log(posts)

  const allPosts = posts.map((p) => {
    return <span><h3 style={{color: 'blue', textAlign:'center'}}>@{user.username} </h3> <p style={{textAlign:'center'}}>{p.comments} </p></span>
  })



  // const postObj = Object.values(posts)
  // console.log(postObj)

  // Object.keys(postObj)
  // (key=>{console.log(`${key}:${postObj[key]}`);});

//   Object.entries(postObj).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });

  // posts.forEach(post=>post.values)

  // for (const [key,value] of Object.entries(posts)) {
  //   console.log(`${key}:${value}`);
  // }
  

  return (
    <main>
    
      <span style={{fontFamily: 'cursive',fontSize: '50px', fontWeight: 'bold', color: 'hotpink', textDecoration: 'none' }}>Petsagram</span>

      <hr></hr>
       <h3 style={{color:'blue', textAlign:'center'}}>  {user ? user.username : 'Please login!'} </h3> 

       <hr></hr>
       {/* {postObj} */}
       {/* <Card> */}
       {/* <img src={allPosts.comments} alt="image"/ > */}
       
       {/* </Card> */}

       {/* {user ? <PostsForm  errors={errors} posts={posts} setPosts={setPosts} /> : null} */}
       
       {user ? <Card> <h3 style={{textAlign:'center'}}>@nekolover</h3> 
                  <Image  className="center" style={{align:'center'}} src="https://c.files.bbci.co.uk/151AB/production/_111434468_gettyimages-1143489763.jpg"/>
                    <h3 style={{textAlign:'center'}}>Fun fact: The Japanese word for cat is neko</h3> 
                    <hr></hr>
                      {user ? <PostsForm  errors={errors} posts={posts} setPosts={setPosts} /> : null} 
                        {allPosts}
                </Card> : null} 
       
       {user ? <Card> <h3 style={{textAlign:'center'}} >@Snowflake</h3> <Image  className="center" style={{align:'center'}}  src="https://www.genengnews.com/wp-content/uploads/2021/08/ricky-kharawala-adK3Vu70DEQ-unsplash-scaled-e1628706903421.jpg"/> <h3 style={{textAlign:'center'}}> I am soft! </h3> <hr></hr> {user ? <PostsForm  errors={errors} posts={posts} setPosts={setPosts} /> : null} <span><h3 style={{color: 'blue',textAlign:'center'}}>@Ice </h3> <p style={{textAlign:'center'}}>Totally soft 😊</p></span><span><h3 style={{color: 'blue',textAlign:'center'}}>@Tuff Stuff </h3> <p style={{textAlign:'center'}}>You ain't so soft!</p></span></Card> : null}  

       {user ? <Card> <h3 style={{textAlign:'center'}}>@Chonky</h3> <Image  className="center" style={{align:'center'}}  src="https://www.thesprucepets.com/thmb/oBSLUM-2XvFRhSWdbVFwV26gnu0=/2400x2400/smart/filters:no_upscale()/guinea-pig-care-1236838-hero-6108e4510f914fcca899fa7605daff47.jpg"/> <h3 style={{textAlign:'center'}}> Do you have any extra lettuce?  <hr></hr> </h3>  {user ? <PostsForm  errors={errors} posts={posts} setPosts={setPosts} /> : null} <span><h3 style={{color: 'blue',textAlign:'center'}}>@LettuceLover </h3> <p style={{textAlign:'center'}}>Possibly... </p></span> </Card> : null}

       {user ? <Card> <h3  style={{textAlign:'center'}}>@Argos1</h3> <Image  className="center" style={{align:'center'}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiLVLnCwenBsArkSI8m3-qSxmFBBgGlooGig&usqp=CAU"/> <h3 style={{textAlign:'center'}}> How  beeeoootiful  I am?  </h3> <hr></hr> {user ? <PostsForm  errors={errors} posts={posts} setPosts={setPosts} /> : null} <span><h3 style={{color: 'blue',textAlign:'center'}}>@Neko Jr </h3> <p style={{textAlign:'center'}}>Kawaii! (˘ᵕ˘)</p> </span>  <span><h3 style={{color: 'blue',textAlign:'center'}}>@Queen </h3> <p style={{textAlign:'center'}}>Loving your style!</p></span> <span><h3 style={{color: 'blue',textAlign:'center'}}>@gamergirl </h3> <p style={{textAlign:'center'}}>Awesome!</p></span> </Card> : null}
       
    </main>
     
    );
  }
  
  export default Posts;
  