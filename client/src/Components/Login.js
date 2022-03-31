import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
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
  // const handleLogout = (e) => {
  //   fetch(`/users`,{
  //       method: 'DELETE',
  //     })
  //       .then(r => r.json())
  //       .then(data => {
  //         console.log(data)
  //         // setUser(null)
  //       })
  //       navigate('/')
  // }
  // const navigate = useNavigate();
  // function handleLoginClick() {
  //   navigate("/home");
  // }
  // function handleLogoutClick() {
  //   navigate("/");
  // }
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
        {/* <button type="submit">Logout</button> */}
        </form>
        {/* <form onSubmit={handleLogout}>
        <button type="submit">Logout</button>
        </form> */}
      </div>
  );
}
export default Login

