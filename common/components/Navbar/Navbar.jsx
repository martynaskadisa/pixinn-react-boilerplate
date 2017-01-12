import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'

import './Navbar.scss'

class Navbar extends Component {
  render () {
    return (
      <nav className='navbar'>
        <ul className='navbar__link-list'>
          <li className='navbar__link-list__item'>
            <IndexLink to='/' className='navbar__link' activeClassName='navbar__link--active'>Home</IndexLink></li>
          <li className='navbar__link-list__item'>
            <Link to='/about' className='navbar__link' activeClassName='navbar__link--active'>About</Link></li>
          <li className='navbar__link-list__item'>
            <Link to='/contact' className='navbar__link' activeClassName='navbar__link--active'>Contact</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
