import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Counter from './counter/container';
import configureStore from './store';

const store = configureStore();
const container = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Counter />
    </Provider>
  </AppContainer>,
  container
);

if (module.hot) {
  module.hot.accept('./counter/container', () => {
    const NextApp = require('./counter/container').default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      container
    );
  });
}
