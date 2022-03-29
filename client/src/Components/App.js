import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Posts from "./Posts";
import NavBar from "./NavBar";
import User from "./User";
import Signup from "./Signup";
import LogOut from "./LogOut";

// ! NOTE: Code that is commented out is a work in progress. It works, but not as intended yet. DO NOT or change.

// const API = "http://localhost:3000/users"

// function App({onLogin}) {
function App() {
  const [user, setUser] = useState(null)
  useEffect(()=>{
    fetch('/me')
      .then(r => {
        if(r.ok){
          r.json().then(data=>setUser(data))
        }
      })
  },[])
 
  // * NOTE: We need to redirect when a user signs up and logs in
  const [posts, setPosts] = useState('')
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [errors, setErrors] = useState(false)

  

    useEffect(() => {
      fetch(`/posts`)
      .then((r) => r.json())
      .then(setPosts)
    }, [user])
    const navigate = useNavigate();


    function handlePost(obj){
      fetch('/posts',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(obj)
      })
      .then(res => {
        if(res.ok){
          res.json()
          .then(json =>  {
            setPosts([...posts,json])
          })
        } else {
          res.json()
          .then(json => {
          setErrors(Object.entries(json.errors))
          })
        }
      })}

    // if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;

  return (

  <div className="App">
    {user && <NavBar  setUser={setUser} user={user} handleLogOutClick={()=> navigate('home') } /> }
    <Routes>
        <Route path="/home" element={<Posts  handlePost= {handlePost } setUser={setUser}/>} />

        <Route path="/signup" element={<Signup  />}/>

        <Route path="/login"element={<Login setUser={setUser} navigate={navigate}/>} />
        <Route path="/logout" element={<LogOut setUser={setUser} navigate={navigate}/>} />
        <Route path="/" element={<LandingPage/>}/>
        <Route exact path="/me" element={<User user={user} setUser={setUser} />}/>
      </Routes>
  </div>
  );
  }

export default App;





// import { useState, useEffect } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import LandingPage from "./LandingPage";
// import Login from "./Login";
// import Posts from "./Posts";
// import NavBar from "./NavBar";

// import Auth from "./Auth";

// // ! NOTE: Code that is commented out is a work in progress. It works, but not as intended yet. DO NOT or change.

// // const API = "http://localhost:3000/users"

// // function App({onLogin}) {
// function App() {
 
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:4000/me").then((response) => {
//       if (response.ok) {
//         response.json().then((user) => setUser(user));
//       }
//     });
//   }, []);
  
//   function handleLogout() {
//     setUser(null);
//   }

//   if (!user) return <Login onLogin={setUser} />;

//   return (
//     <>
//     <div className="App">
//       <NavBar user={user} setUser={setUser} onLogout={handleLogout} />
//       <Routes>
//           <Route exact path="*" element={
//             <LandingPage 
//               user={user}
//               />}/>    
//         </Routes>
//     </div>
//     </>
//   );
// //   // * NOTE: We need to redirect when a user signs up and logs in
// //   const [posts, setPosts] = useState('')
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [user, setUser] = useState(null);
// //   const [errors, setErrors] = useState(false)
// //   let navigate = useNavigate()

// //   useEffect(() => {
// //     fetch("/authorized_user")
// //     .then((res) => {
// //       if(res.ok) {
// //         res.json()
// //         .then((user) => {
// //           console.log(user)
// //           setIsAuthenticated(true);
// //           setUser(user);
// //         })
// //         .then(()=> {
// //           fetch('/home')
// //           .then(res => res.json())
// //           .then(posts => {
// //             console.log(posts)
// //             setPosts(posts)
// //           });
// //         })
// //       }
// //     });

// //   },[]);
// //     function handlePost(obj){
// //       fetch('/posts',{
// //         method:'POST',
// //         headers: {'Content-Type': 'application/json'},
// //         body:JSON.stringify(obj)
// //       })
// //       .then(res => {
// //         if(res.ok){
// //           res.json()
// //           .then(json =>  {
// //             setPosts([...posts,json])
// //           })
// //         } else {
// //           res.json()
// //           .then(json => {
// //           setErrors(Object.entries(json.errors))
// //           })
// //         }
// //       })
// //   }

// //     if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;


// // function handleLogOutClick(){
// //   fetch("/logout",{
// //       method: "DELETE"
// //   }).then((r) => {
// //       if(r.ok){
// //           setUser(null);
// //       }
// //   });
// //   // Navigate to home page after logout and clear history
// //   navigate ('/')
// // }


// //   return (

// //   <div className="App">
// //     {/* <NavBar handleLogOutClick={()=> navigate('home') }setIsAuthenticated={setIsAuthenticated}  */}
   
// //     {/* setUser={setUser} user={user}/> */}
// //     <Routes>
// //         {/* <Route path="/home"
// //           element={<Posts  handlePost= {handlePost }setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>} />

// //         <Route path="/signup" element={<Auth />}/>

// //         <Route path="/login"/> */}
        
// //         <Route path="/" element={<LandingPage/>}/>
// //       </Routes>
// //       </div>

  
// //   );
// }

// export default App
