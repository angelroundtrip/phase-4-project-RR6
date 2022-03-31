import React, {useState}  from 'react'
import {useNavigate} from 'react-router-dom'

function UserUpdateForm({user, setUser, errors, setErrors}) {
    console.log(user)
    const [username, setUpdatedName] =useState("")
    const [password, setUpdatedPassword]= useState("")
    // const [updatedProfielURL, setUpdatedURL]=useState("")
    function handleUsernameChange(e){
        setUpdatedName(e.target.value)
    } 
    function handlePasswordChange(e){
        setUpdatedPassword(e.target.value)
    }
    // function handleSetUpdatedURL(e){
    //     setUpdatedURL(e.target.value)
    // }
    function handleSubmitUpdateForm(e){
        e.preventDefault()
        const updatedUser = {
            username,
            password
        }
       setUser({...user, username, password})
       setUpdatedName("")
       setUpdatedPassword("")
        fetch(`http://localhost:4000/users/${user.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
        })
        .then(r => {
            if(r.ok){
                r.json().then(setUser)
                alert("Updates successful")
            } else {
                r.json().then(e => setErrors(Object.entries(e.error).flat()))
            }
        // setUser(user)
        });
        
        
    }
        
    return (
        
       
        <div className="App" >
            {errors?errors.map(e => <div>{e}</div>):null}
            <form onSubmit={handleSubmitUpdateForm} >
                <h1>Confirm Update</h1>
                <label>
                Username
    
                <input type="text" value={username} onChange={handleUsernameChange} />
                </label>
                <label>
                    Password
                <input type="text" value={password} onChange={handlePasswordChange} />
                </label>
            
            
                <button type="submit">Submit Changes </button>
            </form>
           
        </div>
    )
}
export default UserUpdateForm;
