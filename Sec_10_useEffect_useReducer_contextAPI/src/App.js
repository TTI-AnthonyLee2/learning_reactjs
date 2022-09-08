import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

import AuthContext from './store/auth-context';

const STATUS = {
  LOGIN: 1,
  LOGOUT: 0
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    // console.log("useEffect executing!");
    
    const storedLoginStatus = JSON.parse(localStorage.getItem("loginStatus"));

    if (storedLoginStatus === STATUS.LOGIN) {
      setIsLoggedIn(true);
    }
  }, []); // only execute once after component mounted at the first time

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("loginStatus", STATUS.LOGIN);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("loginStatus", STATUS.LOGOUT);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider 
      value={{
        isLoggedIn: isLoggedIn
      }}
    >
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
