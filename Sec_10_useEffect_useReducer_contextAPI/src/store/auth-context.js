import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false, // set a default value, but it will only be adopted when we use 'Context.Consumer' alone without 'Context.Provider'
});

export default AuthContext;