import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title='Home'
        />
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home
