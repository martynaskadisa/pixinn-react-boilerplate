import React from 'react'
import Helmet from 'react-helmet'

class About extends React.Component {
  render () {
    return (
      <article className='article'>
        <Helmet
          title='About'
        />
        <h1>About</h1>
        <p>Example of a large image loaded with <small><kbd>require('large.img')</kbd></small></p>
        <img src={require('../../images/large.jpg')} alt='' />
      </article>
    )
  }
}

export default About
