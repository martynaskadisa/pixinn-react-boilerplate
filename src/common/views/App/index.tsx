import * as React from 'react';
import { Route } from 'react-router-dom';

import Home from 'common/views/Home';
import About from 'common/views/About';
import Contact from 'common/views/Contact';

import Navbar from 'common/components/Navbar';
import Footer from 'common/components/Footer';

interface IProps { }

interface IState { }

class App extends React.Component<IProps, IState> {
  render () {
    return (
      <div className='App'>
        <Navbar />
        
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        <Footer />
      </div>
    );
  }
}

export default App;
