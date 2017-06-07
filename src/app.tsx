import * as React from 'react';
import Button from './button';
import Counter from './counter';

interface State {
  count: number;
}

interface Props {

}

export default class App extends React.Component<Props, State> {
  public state: State = {
    count: 0,
  };

  public render() {
    return (
      <div>
        <Counter count={this.state.count} />
        <Button label="increment" onClick={this.increment}></Button>
        <Button label="decrement" onClick={this.decrement}></Button>
      </div>
    );
  }


  private increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  private decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }
}
