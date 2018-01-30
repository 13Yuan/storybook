import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Link extends Component {
  render() {
    return (
      <div>
        <a href={this.props.href} >{this.props.name}</a>
      </div>
    )
  }
}
Link.PropTypes = {
    href: PropTypes.string.isRequired,
    name: PropTypes.string
}
