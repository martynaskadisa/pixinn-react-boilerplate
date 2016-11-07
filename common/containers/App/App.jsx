import React, { PropTypes } from 'react'
// import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { Hello } from 'components'
// import s from 'applicationStyles'
// import './App.scss'
if (__CLIENT__) require('./App.scss')

class App extends React.Component {
  render () {
    return (
      <div>
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
