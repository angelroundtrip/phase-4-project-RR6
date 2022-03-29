import React from 'react'
// import { Card } from "semantic-ui-react";

function LandingPage() {

  // const [signUp, setSignUp] = useState([])

  // const test = () => {console.log('HEY')}

  return (

    <div>

      <header className="landing" style={{fontSize: '200px', fontWeight: 'bold', color: 'hotpink', textDecoration: 'none'}}>

        <span style={{fontFamily: 'cursive'}}>Petsagram</span>

        {/* <Card.Content extra> */}
        <div className='ui two buttons'>
           <a href="/signup" style={{padding: '10px', margin: '50px', textDecoration: 'none', fontSize: '50px', fontFamily: 'fantasy'}}> signup </a>
           <a href="/login" style={{padding: '10px', margin: '50px', textDecoration: 'none', fontSize: '50px', fontFamily: 'fantasy'}}> login </a>
        </div>
      {/* </Card.Content> */}

      </header>

    </div>

  )
}

export default LandingPage