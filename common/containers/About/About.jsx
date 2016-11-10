import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'

class About extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title='About'
        />
        <h1>Abouts</h1>
      </div>
    )
  }
}

export default About
