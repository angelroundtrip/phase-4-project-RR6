import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

// const API = "http://localhost:3000/users/"

function NavBar({user, setUser, onLogout}) {
  // const navigate = useNavigate();
  
  const handleLogoutClick = () => {
    fetch("/logout", 
      { method: "DELETE" })
        .then((r) => {
        if (r.ok) {
          setUser(null);
      }
    });
  }

  // * WORKS, kind of!
  const handleUpdateUserClick = () => {
    fetch(`http://localhost:4000/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: !user
      }),
    })
      .then((r) => r.json())
      .then(user => setUser(user));
  }

  // * WORKS, kind of!
  const handleDeleteClick = () => {
      fetch(`http://localhost:4000/users/${user.id}`,{
        method:"DELETE",
      })
      .then((r) => r.json())
      .then(setUser);
  }
  
  return (
    <div className='navbar'>
       <NavLink exact to='/update'>
        <button style={{float: 'right'}} > Update Account </button>
      </NavLink>
      
      <NavLink to='/'>
        <button style={{float: 'right'}} onClick={handleDeleteClick}> Delete Account  </button>
      </NavLink> 

      <NavLink to='/'>
        <button style={{float: 'right'}} onClick={handleLogoutClick}>  Log Out </button>
      </NavLink>
      
    </div>
    )
  }


export default NavBar

