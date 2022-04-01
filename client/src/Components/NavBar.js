import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar({user, setUser}) {
  
  const handleLogoutClick = () => {
    fetch("/logout", 
      { method: "DELETE" })
        .then((r) => {
        if (r.ok) {
          setUser(null);
      }
    });
  }

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
