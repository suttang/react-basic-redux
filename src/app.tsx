import * as React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { Counter } from './counter/container';

const store = configureStore();

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}
