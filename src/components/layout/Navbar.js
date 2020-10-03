import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = ({ title }) => {
    
    return (
      <div className="navbar bg-primary">
        <h1>
          {title}
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link> 
            {/*link keeps the state when switching pages */}
          </li>
        </ul>
      </div>
    )
}

Navbar.defaultProps = {
  title: 'Github Finder'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

export default Navbar
