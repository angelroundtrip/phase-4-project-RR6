import React, {useState}  from 'react'
import {useNavigate} from 'react-router-dom'

function Signup({setUser}) {
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
              navigate(`/posts`)
            } else {
            setErrors(Object.entries(user.errors))
          }
        })  
      }
      
    return (
        <> 
        <h1>Sign Up</h1>
        <form onSubmit={onSubmit}>
        <label>
          Username
   
          <input type="text" value={username} onChange={(e) => handleUsername(e)} />
        </label>
        
        <label>
         Password
    
        <input type="password" value={password} onChange={(e) => handlePassword(e)} />
        </label>

        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        />

        <label htmlFor="pet_name">Pet Name:</label>
        <input
          type="text"
          id="pet_name"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />

        <label htmlFor="pet_species">Pet Species:</label>
        <input
          type="text"
          id="pet_species"
          value={petSpecies}
          onChange={(e) => setPetSpecies(e.target.value)}
        />

        <label htmlFor="bio">Bio:</label>
        <input
          type="text"
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <label htmlFor="profile_image_url">Profile Image:</label>
        <input
          type="text"
          id="profile image"
          value={profileImage}
          onChange={(e) => setProfileImage(e.target.value)}
        />
        
          <input type="submit" value="Sign up!" />
          {/* <button type="submit">Sign up</button> */}
        </form>
        {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </>
    )
}
export default Signup;
