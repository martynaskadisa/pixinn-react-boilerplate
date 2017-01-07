import React from 'react'
import Helmet from 'react-helmet'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title='Home'
        />
        <h1>Home</h1>
        {/* <img src={require('../../images/300.jpg')} alt='' /> */ /* Server chokes on this */}
        <img src='../../images/300.jpg' alt='' />
      </div>
    )
  }
}

export default Home
