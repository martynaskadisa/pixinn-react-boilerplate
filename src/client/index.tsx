import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'common/views/App';

console.error('hi');

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
