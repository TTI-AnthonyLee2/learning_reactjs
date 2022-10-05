import React, { useEffect, useState, useCallback, useMemo } from 'react';
import useHttp from './hooks/useHttp';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [tasks, setTasks] = useState([]);
  
  const configs = useMemo(() => ({
    url: 'https://react-http-practice-2770a-default-rtdb.firebaseio.com/tasks.json',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }), []);

  const applyData = useCallback(data => {
    const loadedTasks = [];

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }

    setTasks(loadedTasks);
  }, []);

  const {isLoading, error, sendRequest: fetchTasks} = useHttp(configs, applyData);

  useEffect(() => {
    fetchTasks();
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
