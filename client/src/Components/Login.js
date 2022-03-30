import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, passwordConfirmation }),
    })
      .then((r) => r.json())
      .then((user) => setUser(user));
        navigate(`/home`)
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

        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
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



// import React, {useState, useEffect} from 'react'
// // import { useHistory } from 'react-router-dom';
// // import Home from './Home.js';

// // function Login({ onLogin})
// function Login({ onLogin}) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//     const [passwordConfirmation, setPasswordConfirmation] = useState("");
//   const [petName, setPetName] = useState("");
//   const [petSpecies, setPetSpecies] = useState("");
//   const [bio, setBio] = useState("");
//   const [profileImage, setProfileImage] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     setErrors([]);
//     setIsLoading(true);
//     fetch("/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: username,
//         password: password,
//         password_confirmation: passwordConfirmation,
//         pet_name: petName,
//         pet_species: petSpecies,
//         bio: bio,
//         profile_image_url: profileImage,
//       }),
//     }).then((r) => {
//       setIsLoading(false);
//       if (r.ok) {
//         r.json().then((user) => onLogin(user));
//       } else {
//         r.json().then((err) => setErrors(err.errors));
//       }
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
   
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           id="username"
//           autoComplete="off"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
     
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           autoComplete="current-password"
//         />
      
//         <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      
//         {errors.map((err) => (
//           <error key={err}>{err}</error>
//         ))}
  
//     </form>
//   );

//   // const [username, setUsername] = useState("");
//   // const [password, setPassword] = useState("");

//   // // let history = useHistory();
  
//   // function handleSubmit(e) {
//   //   e.preventDefault();
//   //   fetch("/login", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify({ username, password}),
//   //   })
//   //     .then((r) => r.json())
//   //     .then((user) => onLogin(user));
//   // }
  

//   // // function handleLoginClick() {
//   // //   history.push("/profile");
//   // // }

//   // // function handleLogoutClick() {
//   // //   history.push("/");
//   // // }

//   // return (
 
//   //   <form onSubmit={handleSubmit}>
//   //     <label htmlFor="username">Username:</label>
//   //     <input
//   //       type="text"
//   //       id="username"
//   //       value={username}
//   //       onChange={(e) => setUsername(e.target.value)}
//   //     />
//   //     <label htmlFor="password">Password:</label>
//   //     <input
//   //       type="password"
//   //       id="password"
//   //       value={password}
//   //       onChange={(e) => setPassword(e.target.value)}
//   //     />
//   //     <label htmlFor="password">Password:</label>
//   //     <input
//   //       type="password"
//   //       id="password"
//   //       value={password}
//   //       onChange={(e) => setPassword(e.target.value)}
//   //     />
//   //     {/* <button onClick={handleLoginClick} type="submit">Login</button>
//   //     <button onClick={handleLogoutClick} type="submit">Logout</button> */}
//   //     <button type="submit">Login</button>
//   //     {/* <button type="submit">Logout</button> */}
      
//   //   </form>
    
//   // );
// }


// export default Login

// // * TESTING BELOW
// // import React, {useState} from 'react'
// // import Authorization from './Authorization'
// // import { useHistory } from "react-router-dom";


// // function Login({setUser,setIsAuthenticated}) {
// //     const [username, setUsername] = useState('')
// //     const [password, setPassword] = useState('')
   
// //     const [error, setError] = useState([])
// //     let history = useHistory();

// //     function onSubmit(e){
// //         e.preventDefault()
// //         const user = {
// //             username: username,
// //             password
// //         }
       
// //         fetch(`/login`,{
// //           method:'POST',
// //           headers:{'Content-Type': 'application/json'},
// //           body:JSON.stringify(user)
// //         })
// //         .then(res => {
// //           if(res.ok){
// //             res.json()
// //             .then(user=>{
// //               setUser(user)
// //               setIsAuthenticated(true)
// //             })
            
// //           } else {
// //             res.json()
// //             .then(json => setError(json.error))
// //           }
// //         })
// //     }
// //     return (
      
// //         <> 
// //         <h1>Flatiron Theater Company</h1>
// //         <h1>Login</h1>
// //         <form onSubmit={onSubmit}>
// //         <label>
// //           Username
   
// //           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
// //         </label>
// //         <label>
// //          Password
    
// //         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
// //         </label>
       
// //         <input type="submit" value="Login!" />
// //       </form>
// //       {error?<div>{error}</div>:null}
// //       <Authorization />
// //         </>
// //     )
// // }

// // export default Login;
