import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import { Hello } from 'components'

class App extends Component {
  render () {
    return (
      <div>
        <Helmet
          htmlAttributes={{'lang': 'lt'}}
          titleTemplate='Pixinn - %s'
          defaultTitle='Pixinn - Internetinių svetainių kūrimas'
        />
        <div className='root'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <Hello />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object
}

export default App
