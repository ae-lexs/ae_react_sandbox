interface TimeProps {
  date: Date;
}

function Time(props: TimeProps) {
  const { date } = props;

  return (
    <div>
      <h1>Tick Component</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Time;
