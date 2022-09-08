import React from 'react';

const AuthContext = React.createContext({ // set a default value, but it will only be adopted when we use 'Context.Consumer' alone without 'Context.Provider'
  isLoggedIn: false,
  onLogout: () => {} 
});

export default AuthContext;