import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password}),
    })
      .then((r) => r.json())
      .then((user) => {
        console.log(user)
        setUser(user);
        navigate(`/posts`)
      })
  }
  
  return (
    
    <div className="landing">

      <a href='/' style={{fontFamily: 'cursive',fontSize: '200px', fontWeight: 'bold', color: 'hotpink', textDecoration: 'none' }}>Petsagram</a>
      
      <form onSubmit={handleSubmit}>

      <p></p>
        <label style={{color: 'white', marginRight:'18px'}} htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

      <p></p>
        <label style={{color: 'white', marginRight:'20px'}} htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

      <p></p>
        <button style={{backgroundColor:'teal', marginLeft:'40%'}} type="submit">Login</button>
       
      </form>
      
      </div>
  );
}
export default Login

