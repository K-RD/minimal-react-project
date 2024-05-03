import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
// Import React router dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Handle Routes
// forwards the user to the appropriate component based on the URL path
// Creating router
const router = createBrowserRouter([
  {
    path:'/',
    element: <div ><Home/></div>
  },
  {
    path:'/register',
    element: <div ><Register /></div>
  },
  {
    path:'/login',
    element: <div ><Login /></div>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/register" component={Register} />
//         <Route path="/login" component={Login} />
//         <Route path="/" component={Home} />
//       </Switch>
//     </Router>
//   );
// }

// function App() {
//   return (
// 		<><Login />
//     </>
// 	);
// }

export default App;
