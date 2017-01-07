import React from 'react'
import Helmet from 'react-helmet'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title='Home'
        />
        <h1>Welcome to Pixinn React boilerplate!</h1>
        <p>This boilerplate includes:</p>
        <ul>
          <li>React (obviously!)</li>
          <li>Redux</li>
          <li>Server-side rendering</li>
          <li>Hot reloading</li>
          <li>Browser-sync</li>
          <li>React-router</li>
          <li>React-helmet</li>
          <li>Scss</li>
          <li>Postcss</li>
          <li>Eslint with StandardJS config</li>
        </ul>
        <p>Planned for future version:</p>
        <ul>
          <li>Socket.io</li>
          <li>MongoDB</li>
        </ul>
        <p>Example of small image imported with <small><kbd>require('name.jpg')</kbd></small></p>
        <img src={require('../../images/300.jpg')} alt='' />
      </div>
    )
  }
}

export default Home
