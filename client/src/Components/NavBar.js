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

  // * need PATCH

  function handleDeleteClick() {
      fetch(`http://localhost:3000/users/${user.id}`,{
        method:"DELETE",
      })
      .then((r) => r.json())
      .then(user);
  }
  
  return (
    <div className='navbar'>
       <NavLink exact to='/'>
        <button style={{float: 'right'}}> Update Account </button>
      </NavLink>
      
      <NavLink to='/'>
        <button style={{float: 'right'}} onClick={handleDeleteClick}> DELETE ACCOUNT  </button>
      </NavLink> 

      <NavLink to='/'>
        <button style={{float: 'right'}} onClick={handleLogoutClick}> {user ? user.username : null} | Log Out </button>
      </NavLink>
      
    </div>
    )
  }


export default NavBar

