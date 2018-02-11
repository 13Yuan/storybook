import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    console.log(this.props.styles);
    const disabledProps = this.props.disabled ? {
      disabled : true
    }: {};
    return (
      <div>
        <button onClick={this.props.onClick} {...disabledProps}>
          {this.props.name || this.props.children}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
   /** click event */  
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string,
  styles: PropTypes.array
};
Button.defaultProps = {
  onClick: () => {},
  name: "",
  styles: []
}
export default Button;
