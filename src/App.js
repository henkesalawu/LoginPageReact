import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import SideMenu from './components/Home/SideMenu';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  useEffect(() =>{
     const storeUserLogInfo = localStorage.getItem('isLoggedIn');
     if (storeUserLogInfo === '1') {
      setIsLoggedIn(true)
  }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment id="App">
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && (
          <React.Fragment>
          <div id="page-wrap">
          <Home onLogout={logoutHandler} />
          </div>
          </React.Fragment>
        )
        }
      </main>
    </React.Fragment>
  );
}

export default App;
