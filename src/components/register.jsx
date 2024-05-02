import React from 'react'
import '../../src/App.css'

const register = () => {
  return (
    <>
		<div className="container">
            <div className="wrapper">
                <h1>Register Page</h1>
                <div className="subContainer">
                    <input type="text" name="username" id="username" placeholder='username'/>
                    <input type="password" name="password" id="password" placeholder='password'/>
                    <button type="submit">Register Now</button>
                </div>
            </div>
		</div>
	</>
  )
}

export default register