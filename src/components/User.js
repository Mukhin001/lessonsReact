import React from "react";
import AddUser from './AddUsers';
import { IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'

class User extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      editForm: false,
    }
  }

  elem = this.props.user;
  render() {
    return (
        <div className="user">
            <IoCloseCircleSharp onClick={() => this.props.onDelete(this.elem.id)} className="delete-icon"/>
            <IoHammerSharp onClick={() => {
                this.setState({
                    editForm: !this.state.editForm
                })
            }} className="edit-icon"/>
            <h3>{this.elem.first_name} {this.elem.last_name}</h3>
            <p>{this.elem.email}</p>
            <img src={this.elem.avatar} />
            <b>{this.elem.isHappy ? 'Happy :)' : 'Unhappy :('}</b>

            {this.state.editForm && <AddUser user={this.props.user} onAdd={this.props.onEdit} />}
        </div>
    )
  }
}

export default User;