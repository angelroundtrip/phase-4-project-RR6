import React, {useState} from 'react'
import { Card } from "semantic-ui-react";

function Home({user, setUser}) {

  return(

    <div>

      <header style={{fontFamily: 'cursive', fontSize: 'calc(30px + 2vmin)', color: 'hotpink', marginLeft: '20px', fontWeight: 'bold'}}> Petsagram </header>

      <span style={{margin: '300px', fontWeight: 'bold', textDecoration: 'underline'}}>{setUser}</span>
      <span style={{margin: '200px', fontWeight: 'bold', textDecoration: 'underline'}}>#of posts</span>
      <span style={{margin: '50px', fontWeight: 'bold', textDecoration: 'underline'}}>Pets</span>

      <div className="col-3">
      <Card style={{marginTop: '150px'}}><h1>Hello, this is the start of our project</h1></Card>

      <Card><h1>Hello, this is the start of our project</h1></Card>
      </div>

    </div>
  )
  
}

export default Home