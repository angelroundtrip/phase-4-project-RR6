import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Posts from "./Posts";
import NavBar from "./NavBar";
import Signup from "./Signup";
import UserUpdateForm from "./UserUpdateForm";
// import PostsContainer from "./PostsContainer";

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
 

  const [posts, setPosts] = useState([])
  const [errors, setErrors] = useState(false)
  const navigate = useNavigate();

    useEffect(() => {
      fetch(`/posts`)
      .then((r) => r.json())
      .then(setPosts)
    }, [user])

      function handleLogout() {
        setUser(null);
      }

      const handleDeleteAccount = () => {
        fetch(`http://localhost:4000/users/${user.id}`,{
          method:"DELETE",
        })
        setUser(null);
        alert("User deleted successfully")
      }

  return (

  <div className="App">

    {user && <NavBar  setUser={setUser} user={user} onLogout={handleLogout} handleDeleteAccount={handleDeleteAccount} />}
   
    <Routes>
    
        <Route path="/signup" element={<Signup user={user} setUser={setUser} />}/>

        <Route path="/login"element={<Login setUser={setUser} navigate={navigate}/>} />
 
        <Route path="/" element={<LandingPage/>}/>
        
        <Route  path="/posts" element={<Posts errors={errors} user={user} setUser={setUser} posts={posts} setPosts={setPosts} />} />

        <Route  path="/update" element={<UserUpdateForm user={user} setUser={setUser} errors={errors} />} />

        {/* <Route path='/posts' element={<PostsContainer posts={posts} user={user}/>}/> */}
        

    </Routes>
    
  </div>
  );
  }

export default App;
