import React from 'react'

const login = () => {
  return (
      <>
          <div className="container">
              <div className="wrapper">
                  <h1>Login Page</h1>
                  <div className="subContainer">
                      <form className='subContainer' action="" method="">
                        <input type="text" name="username" id="username" placeholder='username' />
                        <input type="password" name="password" id="password" placeholder='password' />
                        <button type="submit">Login Now</button>
                    </form>
                      <div className="buttons-wrapper">
                        <a href="/"><button className='btnSecondary'>Home</button></a>
                        <a href="/register"><button className='btnSecondary'>Click here to Register</button></a>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default login