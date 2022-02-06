import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

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
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        minWidth: 300,
      }}
    >
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Box sx={{ color: 'text.secondary' }}>
          <Typography>Counter Value</Typography>
        </Box>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
          <Typography>{counterValue}</Typography>
        </Box>
      </Box>
      <Button variant="outlined" onClick={() => dispatch(increment())}>
        Increment
      </Button>

      <Button variant="outlined" onClick={() => dispatch(decrement())}>
        Decrement
      </Button>

      <TextField
        variant="outlined"
        type="number"
        value={incrementAmount}
        onChange={(event) => setIncrementAmount(Number(event.target.value))}
      />

      <Button
        variant="outlined"
        onClick={() =>
          dispatch(
            incrementByAmount({
              value: incrementAmount,
            }),
          )
        }
      >
        Increment By Amount
      </Button>
    </Box>
  );
}
