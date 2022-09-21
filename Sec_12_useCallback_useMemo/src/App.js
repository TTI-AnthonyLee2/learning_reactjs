import React, { useState } from 'react';

import Button from './components/UI/Button/Button';

import './App.css';

function App() {
  const [showMsg, setShowMsg] = useState(false);

  const clickHandler = () => {
    setShowMsg(prev => !prev);
  }

  console.log('[App] executing!');

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={clickHandler}>show messages</Button>
      {showMsg && <p>here is a message!</p>}
    </div>
  );
}

export default App;
