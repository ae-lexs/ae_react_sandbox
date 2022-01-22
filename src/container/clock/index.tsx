import { Component } from 'react';

import Time from '../../component/time';

interface ClockProps {}
interface ClockState {
  date: Date;
}

class Clock extends Component<ClockProps, ClockState> {
  timerID: ReturnType<typeof setInterval>;

  constructor(props: ClockProps) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <h1>Clock Container</h1>

        <Time date={date} />
      </div>
    );
  }
}

export default Clock;
