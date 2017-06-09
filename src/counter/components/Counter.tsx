import * as React from 'react';
import Count from './Count';
import Button from './Button';

interface Props {
  count: number;
  decrement: (value: number) => void;
  increment: (value: number) => void;
}

class Counter extends React.Component<Props, {}> {
  public render() {
    const { count, increment, decrement } = this.props;
    const incrementAction = () => increment(1);
    const decrementAction = () => decrement(1);

    return (
      <div>
        <Count count={count} />
        <Button label="increment" onClick={incrementAction} />
        <Button label="decrement" onClick={decrementAction} />
      </div>
    );
  }
}

export default Counter;
