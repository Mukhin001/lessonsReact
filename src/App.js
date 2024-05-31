import React from "react";
import Header from "./components/Header";
import Image from './components/Image';
import logo from './img/logo.react.png';

class App extends React.Component {
  
  helpText = 'Help text';

  render() {
    return (
      <div className="name">
        <Header title="Cap WebSite 1"/>
        <h1>{this.helpText}</h1>
        <input placeholder={this.helpText}
          onClick={this.inputClick}
          onMouseEnter={this.mouseOver}/>
        <p>{this.helpText === 'Help text' ? 'Yes' : 'No'}</p>  
        <Image image={logo}/>
      </div>
    )
  }

  inputClick() {console.log('clcik')}
  mouseOver() {console.log('mouse over')}
}

export default App;