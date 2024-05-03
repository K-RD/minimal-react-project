import React from 'react'

const home = () => {
  return (
      <>
          <div className="container">
              <div className="wrapper">
                  <h1>Home Page</h1>
                  <div className="subContainer">
                      <a href="/register"><button >Click here to Register</button></a>
                      <a href="/login"><button >Click here to Login</button></a>
                  </div>
              </div>
          </div>
      </>
  )
}

export default home