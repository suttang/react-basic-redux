import * as React from 'react';
import Count from './count';
import Button from './button';

interface Props {
  count: number;
  decrement: (value: number) => void;
  increment: (value: number) => void;
}

class Counter extends React.Component<Props, {}> {
  public render() {
    return (
      <div>
        <Count count={this.props.count} />
        <Button label="increment" onClick={() => this.props.increment(1)}></Button>
        <Button label="decrement" onClick={() => this.props.decrement(1)}></Button>
      </div>
    );
  }
}

export default Counter;
