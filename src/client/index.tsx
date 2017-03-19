import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import App from 'common/views/App';

render(
  <AppContainer>
    <Router>
      <App />
    </Router>  
  </AppContainer>,
  document.getElementById('app')
);

declare const module;

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('common/views/App', () => {
    const NextApp = require('common/views/App').default;
    render(
      <AppContainer>
        <Router>
          <NextApp />
        </Router>  
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
