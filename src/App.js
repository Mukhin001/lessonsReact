import React from "react";
import Header from "./components/Header";
import Image from './components/Image';
import logo from './img/logo.react.png';
import UserList from './components/UserList';
import Users from './components/Users';
import AddUsers from "./components/AddUsers";

class App extends React.Component {
    // constructor(props) {
    //   super()
    //   this.state = {
    //     helpText: 'Help text',
    //     userData: '',
    //   }

    //   this.inputClick = this.inputClick.bind(this)
    // }
    constructor(props) {
      super(props) 
      this.state = {
          users: [
              {
                  id: 1,
                  firstname: 'Ivan',
                  lastname: 'Petrov',
                  bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sed magni assumenda iure repellendus!.',
                  age: 30,
                  isHappy: true,
      
              },
              {
                  id: 2,
                  firstname: 'Anastasia',
                  lastname: 'Lastochkina',
                  bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sed magni assumenda iure repellendus!.',
                  age: 25,
                  isHappy: false,
      
              },
          ]
      }
      // работа с состояниями
      this.addUser = this.addUser.bind(this) 
      this.deleteUser = this.deleteUser.bind(this)    
      this.editUser = this.editUser.bind(this)
  }


  render() {
    return (
      <div>
        <Header title="Cap WebSite 1"/>
        <UserList title='List users'/>
        <h1>{this.state.helpText}</h1>
        <h2>{this.state.userData}</h2>
        <input placeholder={this.state.helpText}
          onChange={event => this.setState({userData: event.target.value})}
          onClick={this.inputClick}
          onMouseEnter={this.mouseOver}/>
        <p>{this.state.helpText === 'Help text' ? 'Yes' : 'No'}</p>  
        <Image image={logo}/>
        <main>
          <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>
        </main>
        <aside><AddUsers onAdd={this.addUser}/></aside>
      </div>
    )
  }

  addUser(user) {
    const id = this.state.users.length + 1;
    this.setState({ users: [...this.state.users, {id, ...user}]})
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((elem) => elem.id !== id)
    })
  }

  editUser(user) {
    let allUsers = this.state.users
    allUsers[user.id - 1] = user

    this.setState({users: []}, () => {
      this.setState({users: [...allUsers]})
    })
  }

  inputClick() {
    this.setState({helpText: 'Changed'})
    console.log('clcik')}
  mouseOver() {console.log('mouse over')}
}

export default App;