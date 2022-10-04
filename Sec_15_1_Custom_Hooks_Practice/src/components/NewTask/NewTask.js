import useHttp from '../../hooks/useHttp';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const configs = {
    url: 'https://react-http-practice-2770a-default-rtdb.firebaseio.com/tasks.json',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const applyData = (data, taskText) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const {isLoading, error, sendRequest: enterTaskHandler} = useHttp(configs, applyData);

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
