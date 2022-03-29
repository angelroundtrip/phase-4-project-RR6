// import React, {useState} from 'react'
// // import { Card } from "semantic-ui-react";

// const USERS = 'http://localhost:3000/users'

// // * Info from /home is coming from here

// function Posts() {

// // ! Lines 9-26 have no effect at the moment, but nothing is breaking. Want to set username dynamically
//   const [user, setUser] = useState('');

//   const USER = () => {
//     fetch(USERS ,{
//       method:"PATCH",
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//           username: user.last.username
//       })
//         })
//         .then((r) => r.json())
//         .then(user => {
//             setUser(user) 
//         })
//         USER(user.id)
//     }
 

//   return(

//     <div>

//       <header style={{fontFamily: 'cursive', fontSize: 'calc(30px + 2vmin)', color: 'hotpink', marginLeft: '20px', fontWeight: 'bold'}}> Petsagram </header>

//       <span style={{margin: '300px', fontWeight: 'bold', textDecoration: 'underline'}}>@username {USER}</span>
//       <span style={{margin: '200px', fontWeight: 'bold', textDecoration: 'underline'}}>#of posts</span>
//       <span style={{margin: '50px', fontWeight: 'bold', textDecoration: 'underline'}}>Pets</span>

//       <div className="col-3">
//       {/* <Card style={{marginTop: '150px'}}><h1>Hello, this is the start of our project</h1></Card> */}

//       {/* <Card><h1>Hello, this is the start of our project</h1></Card> */}
//       </div>

//     </div>
//   )
  
// }

// export default Posts