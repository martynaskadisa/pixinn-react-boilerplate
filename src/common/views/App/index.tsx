import * as React from 'react';
import { Route, Link } from 'react-router-dom';

import Home from 'common/views/Home';
import About from 'common/views/About';
import Contact from 'common/views/Contact';

interface IProps { }

interface IState { }

class App extends React.Component<IProps, IState> {
  render () {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <footer>
          <hr/>
          Made by Pixinn
        </footer>
      </div>
    );
  }
}

export default App;
