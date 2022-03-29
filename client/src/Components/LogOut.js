import React from 'react'
function LogOut({navigate, setUser}) {
    const handleClick = (e) => {
        fetch(`/users`,{
            method: 'DELETE',
          })
            .then(r => r.json())
            .then(data => {
              console.log(data)
              setUser(null)
              navigate('/')
            })
    }
  return (
    <div className='goodbye'>
        <h1 align='center'>LogOut</h1>
        {/* <img src={require('../images/eatme_logout.png')} alt='goodbye photo'/> */}
        <button onClick={(e) => handleClick()}>LogOut</button>
    </div>
  )
}
export default LogOut