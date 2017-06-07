import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const container = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  container,
);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      container,
    );
  });
}
