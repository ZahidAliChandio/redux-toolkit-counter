import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount } from './redux/counter';
function App(props) {
  // varibale/value to read from any reducer
  // state.counter -> counter is a reducer in store   
  const { count } = useSelector(state => state.counter);
  // const  count  = useSelector(state => state.counter.count) Same as above

  // Dispatch is used to call any action from any reducer
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>Count is: {count}</h1>
      <button onClick={() =>dispatch(decrement()) }>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
}

export default App;
