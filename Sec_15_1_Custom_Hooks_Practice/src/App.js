import React, { useEffect, useState } from 'react';
import useHttp from './hooks/useHttp';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const {isLoading, error, sendRequest: fetchTasks} = useHttp();

  useEffect(() => {
    console.log('Effect');
    const configs = {
      url: 'https://react-http-practice-2770a-default-rtdb.firebaseio.com/tasks.json',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const applyData = data => {
      const loadedTasks = [];
  
      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
  
      setTasks(loadedTasks);
    };

    fetchTasks(configs, applyData);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
