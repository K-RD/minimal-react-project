import React from 'react'

const login = () => {
  return (
      <>
          <div className="container">
              <div className="wrapper">
                  <h1>Login Page</h1>
                  <div className="subContainer">
                      <input type="text" name="username" id="username" placeholder='username' />
                      <input type="password" name="password" id="password" placeholder='password' />
                      <button type="submit">Login Now</button>
                  </div>
              </div>
          </div>
      </>
  )
}

export default login