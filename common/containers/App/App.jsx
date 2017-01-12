import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import './App.scss'
import { Navbar } from 'components'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Helmet
          htmlAttributes={{'lang': 'lt'}}
          titleTemplate='Pixinn - %s'
          defaultTitle='Pixinn - Internetinių svetainių kūrimas'
        />
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object
}

export default App
// export default styleHelper(App, styles)
