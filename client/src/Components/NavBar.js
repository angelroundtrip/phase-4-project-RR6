import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar({user, setUser, handleDeleteAccount}) {
  
  const handleLogoutClick = () => {
    fetch("/logout", 
      { method: "DELETE" })
        .then((r) => {
        if (r.ok) {
          setUser(null);
      }
    });
  }

  // const handleDeleteClick = () => {
  //     fetch(`http://localhost:4000/users/${user.id}`,{
  //       method:"DELETE",
  //     })
  //     .then((r) => r.json())
  //     .then(setUser);
  // }
  
  return (
    <div className='navbar'>

      <NavLink to='/'>
        <button style={{float: 'right', backgroundColor:'teal', marginLeft: '10px', marginTop: '40px'}} onClick={handleDeleteAccount} > Delete Account  </button>
      </NavLink> 

       <NavLink exact to='/update'>
        <button style={{float: 'right', backgroundColor:'teal', marginLeft: '10px', marginTop: '40px'}} > Update Account </button>
      </NavLink>
      
      <NavLink to='/'>
        <button style={{float: 'right', backgroundColor:'teal', marginLeft: '10px', marginTop: '40px'}} onClick={handleLogoutClick}>  Log Out </button>
      </NavLink>
      
    </div>
    )
  }


export default NavBar
