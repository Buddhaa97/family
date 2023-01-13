import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../state/store/store';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../../state/counter/counter.slice';
import styles from './styles/counter.module.css';

const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;
  const [isOdd, setIsOdd] = useState(false);

  useEffect(() => {
    if (count % 2 === 1) {
      setIsOdd(true);
    } else {
      setIsOdd(false);
    }
  }, [count])

  return (
    <div id="counter">
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <p  className={styles.text}>
          The Count is Odd Number:
        </p>
        <h1 style={{marginLeft: "20px", color: `${!isOdd ? "red" : "blue"}` }}>{isOdd ? 'TRUE' : 'FALSE'}</h1>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          👈 Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}

export default Counter;
