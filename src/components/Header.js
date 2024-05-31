import React from "react";
import Button from "./Button.js";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        {this.props.title}
        <Button />
        <Button text='Nottub' />
      </header>
    )
  }
}

export default Header;