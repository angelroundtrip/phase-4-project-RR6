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

  // * not working yet
  const handleUpdateUserClick = () => {
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isUser: !user.isUser,
      }),
    })
      .then((r) => r.json())
      .then((user) => setUser(user));
  }

  // * not working yet
  const handleDeleteClick = () => {
      fetch(`http://localhost:3000/users/${user.id}`,{
        method:"DELETE",
      })
      .then((r) => r.json())
      .then(setUser);
  }
  
  return (
    <div className='navbar'>
       {/* <NavLink exact to='/'> */}
        <button style={{float: 'right'}} onClick={handleUpdateUserClick}> Update Account </button>
      {/* </NavLink> */}
      
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

