// import React, {useState} from 'react'
// import { Card } from "semantic-ui-react";

// const API = "http://localhost:3000/"

// function Home({user, setUser, posts, setPosts}) {

//   const [postName,setPostName] = useState("")
//   const [photo,setPhoto] = useState("")
//   const [comment,setComment] = useState("")


//   }
  
// //   let oldPostsId = 0

// //   const findPostName = () => {
// //     const newPosts = allPosts.map((p) => {
// //       if(p[0] === postName){
// //         oldPostsId = p[1]
// //         return p[0] === postName
// //       }
// //       return false
// //     })
// //     return newPosts
// //   }

// //   const handleSubmit = (e) => {
// //     // e.preventDefault()
// //     if(!(findPostName().includes(true)))
// //     {

// //       console.log("Running new post")
// //       const postId = posts[posts.length - 1].id + 1
// //       const newPost = {
// //         name: postName,
// //         image_url: photo,
// //         comments: comment
// //       }

// //       fetch(API + "posts",{
// //         method:"POST",
// //         headers: { "Content-Type": "application/json",},
// //         body: JSON.stringify(newPost)
// //       }).then(r=>r.json()).then(console.log)


// //   }
// // }

//   return(

//     <div>

//       <header style={{fontFamily: 'cursive', fontSize: 'calc(30px + 2vmin)', color: 'hotpink', marginLeft: '20px', fontWeight: 'bold'}}> Petsagram </header>

//       <span style={{margin: '300px', fontWeight: 'bold', textDecoration: 'underline'}}>{setUser}</span>
//       <span style={{margin: '200px', fontWeight: 'bold', textDecoration: 'underline'}}>#of posts</span>
//       <span style={{margin: '50px', fontWeight: 'bold', textDecoration: 'underline'}}>Pets</span>

//       <p></p>
//       <button>New Post</button>

//       <div className="col-3">
//       <Card style={{marginTop: '150px'}}><h1>Hello, this is the start of our project</h1></Card>

//       <Card><h1>Pets Only</h1></Card>
//       <Card>Hello, this is the start of our project {setPosts}</Card>
//       </div>

// {/* <form onSubmit={handleSubmit} style={{marginTop: '2%'}}>
        
//         <p style={{marginTop: '5%'}}></p>
//        <label style={{marginRight: '61px', fontWeight: 'bold'}}>Post Title</label>
//        <input style={{borderColor: 'navy', width: '20%', borderRadius: '5px'}} type={"text"} onChange={(e) => setPostName(e.target.value)}></input>

//        <p style={{marginTop: '2%'}}></p>
//         <label style={{marginRight: '63px', fontWeight: 'bold', textAlign: 'left'}}>Photo</label>
//        <input style={{borderColor: 'navy', width: '20%', borderRadius: '5px'}} type={"text"} onChange={(e) => setPhoto(e.target.value)}></input>

//        <p style={{marginTop: '2%'}}></p>
//        <label style={{marginRight: '60px', fontWeight: 'bold', textAlign: 'left'}}>Comment</label>
//        <input style={{borderColor: 'navy', width: '20%', borderRadius: '5px'}} type={"text"} onChange={(e) => setComment(e.target.value)}></input>
//        </form> */}
//     </div>
//   )
  
// }

// export default Home