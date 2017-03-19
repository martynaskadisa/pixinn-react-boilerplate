import * as React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from 'common/views/App';
import Home from 'common/views/Home';
import About from 'common/views/About';
import Contact from 'common/views/Contact';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
