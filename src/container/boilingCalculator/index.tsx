import { ChangeEvent, Component, ReactNode } from 'react';

import BoilingVerdict from '../../component/boilingVerdict';
import TemperatureInput from '../../component/temperatureInput';

import { Scales, toCelsius, toFahrenheit } from './scales';

interface BoilingCalculatorProps {}
interface BoilingCalculatorState {
  celciusTemperature: number;
  fahrenheitTemperature: number;
}

class BoilingCalculator extends Component<
  BoilingCalculatorProps,
  BoilingCalculatorState
> {
  constructor(props: BoilingCalculatorProps) {
    super(props);

    this.celciusTemperatureHandleChange =
      this.celciusTemperatureHandleChange.bind(this);
    this.fahrenheitTemperatureHandleChange =
      this.fahrenheitTemperatureHandleChange.bind(this);

    this.state = {
      celciusTemperature: 0,
      fahrenheitTemperature: 0,
    };
  }

  celciusTemperatureHandleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      celciusTemperature: Number(event.target.value),
      fahrenheitTemperature: toFahrenheit(Number(event.target.value)),
    });
  }

  fahrenheitTemperatureHandleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      celciusTemperature: toCelsius(Number(event.target.value)),
      fahrenheitTemperature: Number(event.target.value),
    });
  }

  render(): ReactNode {
    const { celciusTemperature, fahrenheitTemperature } = this.state;

    return (
      <fieldset>
        <TemperatureInput
          scale={Scales.Celsius}
          temperature={celciusTemperature}
          temperatureHandleChange={this.celciusTemperatureHandleChange}
        />
        <TemperatureInput
          scale={Scales.Fahrenheit}
          temperature={fahrenheitTemperature}
          temperatureHandleChange={this.fahrenheitTemperatureHandleChange}
        />
        <BoilingVerdict celsius={Number(celciusTemperature)} />
      </fieldset>
    );
  }
}

export default BoilingCalculator;
