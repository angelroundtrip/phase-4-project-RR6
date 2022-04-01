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
    <div>

      <form onSubmit={handleSubmit}>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

        <button type="submit">Login</button>
       
      </form>
      
      </div>
  );
}
export default Login

