import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import './App.scss'
import { Navbar, Footer } from 'components'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Helmet
          htmlAttributes={{'lang': 'lt'}}
          titleTemplate='Pixinn React boilerplate - %s'
          defaultTitle='Pixinn React boilerplate'
        />
        <Navbar />
        <main className='app__main'>
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object
}

export default App
