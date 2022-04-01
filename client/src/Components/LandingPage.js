import React from 'react'

function LandingPage() {

  return (
    <div >

      <header className="landing" style={{fontSize: '200px', fontWeight: 'bold', color: 'hotpink', textDecoration: 'none'}}>

        <span style={{fontFamily: 'cursive'}}>Petsagram</span>
        <span style={{fontFamily: 'cursive'}}> <a href="/login">Petsagram</a></span>
       
        <div className='ui two buttons'>
           <a href="/signup" style={{padding: '10px', margin: '50px', textDecoration: 'none', fontSize: '50px', fontFamily: 'fantasy'}}> signup </a>
           <a href="/login" style={{padding: '10px', margin: '50px', textDecoration: 'none', fontSize: '50px', fontFamily: 'fantasy'}}> login </a>
        </div>

      </header>

    </div>
    )
  }

export default LandingPage
