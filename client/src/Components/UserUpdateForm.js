// import React, {useState}  from 'react'
// import {useNavigate} from 'react-router-dom'

// function UserUpdateForm() {
   
//   const handleUpdateUserClick = () => {
//     fetch(`http://localhost:4000/users/${user.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         user
//       }),
//     })
//       .then((r) => r.json())
//       .then((user) => setUser(user));
//   }
      
//     return (
//         <> 
//         <h1>Confirm Update</h1>
//         <form onSubmit={onSubmit}>
//         <label>
//           Username
   
//           <input type="text" value={username} onChange={(e) => handleUsername(e)} />
//         </label>
        
        
//           <input type="submit" value="Sign up!" />
//           {/* <button type="submit">Sign up</button> */}
//         </form>
//         {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
//         </>
//     )
// }
// export default Signup;
