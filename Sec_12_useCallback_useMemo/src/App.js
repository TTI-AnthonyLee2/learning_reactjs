import React, { useCallback, useState } from 'react';

import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showMsg, setShowMsg] = useState(false);

  const clickHandler = useCallback(() => {
    setShowMsg(prev => !prev);
    // * Because of JS closure, the variable 'showMsg' will keep the original value. Eventually failed to work.
    // setShowMsg(!showMsg);
  }, []);

  console.log('[App] executing!');

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={clickHandler}>show messages</Button>
      <DemoOutput showMsg={false} />
    </div>
  );
}

export default App;
