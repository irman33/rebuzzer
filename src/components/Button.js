import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button className="btn btn-menu" onClick={this.props.handleClick}>
        {this.props.label}
      </button>
    );
  }
}

export default Button;
