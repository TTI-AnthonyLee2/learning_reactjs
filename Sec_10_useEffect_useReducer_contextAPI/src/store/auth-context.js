import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({ // set a default value, but it will only be adopted when we use 'Context.Consumer' alone without 'Context.Provider'
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
});

const STATUS = {
  LOGIN: 1,
  LOGOUT: 0
};

export const AuthContextProvider = ({children}) => {
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
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;