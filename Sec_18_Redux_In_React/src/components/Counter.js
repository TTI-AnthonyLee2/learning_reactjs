import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { ACTIONS } from '../store';

const num = 5;

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  const handleIncrement = () => {
    dispatch({type: ACTIONS.INCREMENT});
  };

  const handleIncrease = () => {
    dispatch({type: ACTIONS.INCREASE, payload: {value: num}});
  };

  const handleDecrement = () => {
    dispatch({type: ACTIONS.DECREMENT});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase by {num}</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
