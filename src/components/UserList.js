import React from "react";

class UserList extends React.Component {
  render() {
    return (
      <div className="header">
        {this.props.title}
      </div>
    )
  }
}

export default UserList;