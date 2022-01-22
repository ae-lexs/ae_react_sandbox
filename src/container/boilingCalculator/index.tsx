import { ChangeEvent, Component, ReactNode } from 'react';

import BoilingVerdict from '../../component/boilingVerdict';

interface BoilingCalculatorProps {}
interface BoilingCalculatorState {
  temperature: string;
}

class BoilingCalculator extends Component<
  BoilingCalculatorProps,
  BoilingCalculatorState
> {
  constructor(props: BoilingCalculatorProps) {
    super(props);

    this.temperatureHandleChange = this.temperatureHandleChange.bind(this);

    this.state = {
      temperature: '',
    };
  }

  temperatureHandleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      temperature: event.target.value,
    });
  }

  render(): ReactNode {
    const { temperature } = this.state;

    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value={temperature} onChange={this.temperatureHandleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

export default BoilingCalculator;
