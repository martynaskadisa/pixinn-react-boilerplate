import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'

class Navbar extends Component {
  render () {
    return (
      <nav>
        <ul>
          <li><IndexLink to='/' activeClassName='link--active'>Home</IndexLink></li>
          <li><Link to='/about' activeClassName='link--active'>About</Link></li>
          <li><Link to='/contact' activeClassName='link--active'>Contact</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
