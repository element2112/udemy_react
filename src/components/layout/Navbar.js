import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {

  static defaultProps = {
    title: 'Github Finder'
  };

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="navbar bg-primary">
        <h1>
          {this.props.title}
        </h1>
      </div>
    )
  }
}

export default Navbar
