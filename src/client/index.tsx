import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import App from 'common/views/App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <Component />
      </Router>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

// Hot Module Replacement API
declare const module;

if (module.hot) {
  module.hot.accept('common/views/App', () => {
    const NextApp = require('common/views/App').default;

    render(NextApp); 
  });
}
