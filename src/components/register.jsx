import React, { useState } from 'react'
import '../../src/App.css'

const Register = () => {
  const [count, setCount] = useState(0)

  return (
    <>
		<div className="container">
            <div className="wrapper">
                <h1>Register Page</h1>
                <div className="subContainer">
                      <form className='subContainer' action="" method="">
                        <input type="text" name="username" id="username" placeholder='username'/>
                        <input type="password" name="password" id="password" placeholder='password'/>
                        <button type="submit" >Register Now</button>
                      </form>
                      {/* <button id='counterBtn' onClick={increaseCount} >Count : {count} </button> */}
                      <div className="buttons-wrapper">
                          <a href="/" className='btnSecondary'><button className='btnSecondary'>Home</button></a>
                          <a href="/login"><button className='btnSecondary' >Click here to Login</button></a>
                      </div>
                          <button id='counterBtn' onClick={() => { setCount(count + 1) }} >Count : {count} </button>
                </div>
            </div>
		</div>
	</>
  )
}

export default Register