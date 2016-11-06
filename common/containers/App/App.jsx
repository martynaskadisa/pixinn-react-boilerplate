import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { Hello } from 'components'
// import s from 'applicationStyles'
import style from './App.scss'

class App extends React.Component {
  render () {
    return (
      <div>
        <div className={style.root}>
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

export default withStyles(s)(App)
