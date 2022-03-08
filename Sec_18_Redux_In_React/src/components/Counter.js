import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';

// import { ACTIONS } from '../store';

const num = 5;

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const displayed = useSelector((state => state.counter.displayed));
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
    // dispatch({type: ACTIONS.TOGGLE});
  };

  const handleIncrement = () => {
    dispatch(counterActions.increment());
    // dispatch({type: ACTIONS.INCREMENT});
  };

  const handleIncrease = () => {
    dispatch(counterActions.increase({value: num})); // { type: UNIQUE_IDENTIFIER, payload: arg1}
    // dispatch({type: ACTIONS.INCREASE, payload: {value: num}});
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
    // dispatch({type: ACTIONS.DECREMENT});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {displayed && <div className={classes.value}>{counter}</div>}
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
