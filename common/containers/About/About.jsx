import React from 'react'
import Helmet from 'react-helmet'

import style from './About.scss'

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
