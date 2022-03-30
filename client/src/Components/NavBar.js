import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

// * Is working on login
function NavBar({user, setUser, onLogout}) {
  // const navigate = useNavigate();
  // * March 30 code - Logout doesn't currently work
  const handleLogoutClick = () => {
    fetch("/logout", 
      { method: "DELETE" })
        .then((r) => {
        if (r.ok) {
          setUser(null);
      }
    });
  }
  
  return (
    <div className='navbar'>
      <NavLink exact to='/'>
        <button> Home 🏡 </button>
      </NavLink>
      
      <NavLink to='/home'>
        <button> My Page 👤 </button>
      </NavLink>
      <NavLink to='/'>
        <button onClick={handleLogoutClick}> Log Out </button>
        
      </NavLink>
    </div>
  )
}

export default NavBar






// import React from 'react'

// function NavBar({ onLogout }) {
//   function handleLogout() {
//     fetch("/logout", {
//       method: "DELETE",
//     }).then(() => onLogout());
//   }

//   return (
//     <header>
//       <button onClick={handleLogout}>Logout</button>
//     </header>
//   );
// }

// export default NavBar

// import {Link} from "react-router-dom";
// // <Nav onClick={handleLogOutClick} className="log_out">Logout</Nav>

// function NavBar({cart, setIsAuthenticated, setUser, user}) {
//     console.log(user)
//     const logout = () => {
//         fetch('/logout',{
//             method:'DELETE'
//         })
//         .then(()=>{
//             setIsAuthenticated(false)
//             setUser(null)
//         })
//     }
//     return (
//         <> 
   
//          <h1>Flatiron Theater Company</h1>
//          <div>
//             <button onClick={logout}>Logout</button>
//            <h1><Link to="/"> Home</Link></h1>
//            {user&&user.admin?<h1><Link to="/productions/new">New Production</Link></h1>:null}

//          </div>

//         </>
//     )

// }

// export default NavBar;