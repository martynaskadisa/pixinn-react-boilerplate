import React from 'react'
import Helmet from 'react-helmet'

class Contact extends React.Component {
  render () {
    return (
      <article className='article'>
        <Helmet
          title='Contact'
        />
        <h1>Contact</h1>
        <p>This boilerplate was created by Martynas Kadiša@Pixinn</p>
      </article>
    )
  }
}

export default Contact
