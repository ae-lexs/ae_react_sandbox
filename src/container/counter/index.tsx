import { useState } from 'react';

import { useStoreDispatch, useStoreSelector } from '../../store/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCounterValue,
} from '../../store/slice/counter';

export default function Counter() {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const counterValue = useStoreSelector(selectCounterValue);
  const dispatch = useStoreDispatch();

  return (
    <div>
      <div>
        <button type="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{counterValue}</span>
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>

        <input
          type="number"
          value={incrementAmount}
          onChange={(event) => setIncrementAmount(Number(event.target.value))}
        />
        <button
          type="button"
          onClick={() =>
            dispatch(
              incrementByAmount({
                value: incrementAmount,
              }),
            )
          }
        >
          Increment By Amount
        </button>
      </div>
    </div>
  );
}
