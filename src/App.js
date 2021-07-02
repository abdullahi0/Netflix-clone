import React from 'react';
import  * as ROUTES from './constants/routes';
import {BrowserRouter as Router} from 'react-router-dom';
import {Home, Browse, Signin, Signup} from './pages';
import {IsUserRedirect,ProtectedRoute} from './helpers/routes';
import {useAuthListener} from './hooks';
function App() {
const {user} = useAuthListener();
  console.log(user);



  return (
  <Router>
    <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
        exact
      >
        <Signin />
      </IsUserRedirect>
      <ProtectedRoute
        user={user}
        path={ROUTES.BROWSE}
        exact
      >
        <Browse />  
      </ProtectedRoute>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
        exact
      >
        <Signup />
      </IsUserRedirect>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
        exact
      >
        <Home />
      </IsUserRedirect>

    

    

    
      
      
    
    
  </Router>

  );
}

export default App;
