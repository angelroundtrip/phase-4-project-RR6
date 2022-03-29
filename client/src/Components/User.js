import React from 'react'

function User({user}){
console.log(user)
  return (
    <div User >
    <h1 align="center">{`${user.username}'s Page`}</h1>
    </div>
  )
}

export default User