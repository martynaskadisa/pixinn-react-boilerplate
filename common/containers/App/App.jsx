import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'

import { Hello } from 'components'
if (__CLIENT__) require('./App.scss')

class App extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          htmlAttributes={{'lang': 'lt'}}
          titleTemplate='Pixinn - %s'
          defaultTitle='Pixinn - Internetinių svetainių kūrimas'
          base={{'target': '_blank', 'href': 'http://www.pixinn.lt/'}}
        />
        <div className='root'>
          <p>Yo</p>
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
