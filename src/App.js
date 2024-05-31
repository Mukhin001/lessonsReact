import React from "react";
import Header from "./components/Header";
import Image from './components/Image';
import logo from './img/logo.react.png';

class App extends React.Component {
    constructor(props) {
      super()
      this.state = {
        helpText: 'Help text',
        userData: '',
      }

      this.inputClick = this.inputClick.bind(this)
    }


  render() {
    return (
      <div className="name">
        <Header title="Cap WebSite 1"/>
        <h1>{this.state.helpText}</h1>
        <h2>{this.state.userData}</h2>
        <input placeholder={this.state.helpText}
          onChange={event => this.setState({userData: event.target.value})}
          onClick={this.inputClick}
          onMouseEnter={this.mouseOver}/>
        <p>{this.state.helpText === 'Help text' ? 'Yes' : 'No'}</p>  
        <Image image={logo}/>
      </div>
    )
  }

  inputClick() {
    this.setState({helpText: 'Changed'})
    console.log('clcik')}
  mouseOver() {console.log('mouse over')}
}

export default App;