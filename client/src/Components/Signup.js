import React, {useState}  from 'react'
import {useNavigate, NavLink} from 'react-router-dom'

function Signup({ user, setUser }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [petName, setPetName] = useState("");
    const [petSpecies, setPetSpecies] = useState("");
    const [bio, setBio] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const handleUsername = (e) => setUsername(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const navigate = useNavigate();
  
    function onSubmit(e){
        e.preventDefault()
        const newUser = {
          username: username,
          password: password,
          password_confirmation: passwordConfirmation,
          pet_name: petName,
          pet_species: petSpecies,
          bio: bio,
          profile_image_url: profileImage,
        }
        console.log(newUser)
       
        fetch(`/signup`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(user => {
            console.log(user)
            if (!user.errors)  { 
              // navigate(`/posts`)
              alert("Signup successful! Click on view posts!")
            } else {
            setErrors(Object.entries(user.errors))
          }
        })  
      }

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
        <div className="landing" style={{color:'white'}}> 

         <a href='/' style={{fontFamily: 'cursive',fontSize: '200px', fontWeight: 'bold', color: 'hotpink', textDecoration: 'none' }}>Petsagram</a>

        {/* <h1>Sign Up</h1> */}

        <p></p>
        <form onSubmit={onSubmit}>
        <label >
          Username:
          <input style={{color: 'white', marginLeft:'20px'}} type="text" value={username} onChange={(e) => handleUsername(e)} />
        </label>
        
        <p></p>
        <label>
         Password:
        <input style={{color: 'white', marginLeft:'20px'}} type="password" value={password} onChange={(e) => handlePassword(e)} />
        </label>

        <p></p>
        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input
        style={{color: 'white', marginLeft:'20px'}}
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        />

        <p></p>
        <label htmlFor="pet_name">Pet Name:</label>
        <input
          style={{color: 'white', marginLeft:'20px'}}
          type="text"
          id="pet_name"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />

        <p></p>
        <label htmlFor="pet_species">Pet Species:</label>
        <input
          style={{color: 'white', marginLeft:'20px'}}
          type="text"
          id="pet_species"
          value={petSpecies}
          onChange={(e) => setPetSpecies(e.target.value)}
        />

        <p></p>
        <label htmlFor="bio">Bio:</label>
        <input
          style={{color: 'white', marginLeft:'20px'}}
          type="text"
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <p></p>
        <label htmlFor="profile_image_url">Profile Image:</label>
        <input
          style={{color: 'white', marginLeft:'20px'}}
          type="text"
          id="profile image"
          value={profileImage}
          onChange={(e) => setProfileImage(e.target.value)}
        />
        
        <p></p>
        <button style={{backgroundColor:'teal', marginLeft:'30%'}} type="submit">Signup</button>

          <p></p>
        <button style={{ backgroundColor:'teal', marginLeft:'25%'}}><a style={{color:'white', textDecoration: 'none'}}href='/posts' type="submit"> View Posts </a> </button>

        </form>
        {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </div>
    )
}
export default Signup;
