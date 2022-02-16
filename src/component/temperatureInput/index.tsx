import React from 'react';

import { Scales } from '../../container/boilingCalculator/scales';

interface TemperatureInputProps {
  scale: Scales;
  temperature: number;
  temperatureHandleChange: Function;
}

function TemperatureInput(props: TemperatureInputProps) {
  const { scale, temperature, temperatureHandleChange } = props;

  return (
    <fieldset>
      <legend>Enter temperature in {scale}:</legend>
      <input
        value={temperature}
        onChange={(event) => temperatureHandleChange(event)}
      />
    </fieldset>
  );
}

export default TemperatureInput;
