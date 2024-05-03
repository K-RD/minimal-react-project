import React from 'react'

const home = () => {
    const enterFullscreen = () => {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { /* Firefox */
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { /* IE/Edge */
            element.msRequestFullscreen();
        }
    };
  return (
      <>
          <div className="container">
              <div className="wrapper">
                  <h1>Home Page</h1>
                  <div className="subContainer">
                      <a href="/register"><button >Click here to Register</button></a>
                      <a href="/login"><button >Click here to Login</button></a>
                      <button type="button" onClick={enterFullscreen}>Enter Fullscreen</button>
                  </div>
              </div>
          </div>
      </>
  )
}

export default home