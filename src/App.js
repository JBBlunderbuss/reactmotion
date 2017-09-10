import React, { Component } from 'react';
import logo from './logo.svg';
import Scrollable from './components/scrollable';
import List from './components/list';
import InputForm from './components/inputForm';
import './App.css';

class App extends Component {
  addVal = val => {
    console.log('appjs receiving val', val);
    this.setState({
      items: this.state.items.concat({ name: val })
    });
  };

  componentWillMount() {
    this.setState({
      items: [
        { name: 'jabba' },
        { name: 'jamie' },
        { name: 'jimmy' },
        { name: 'James' }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Scrollable items={this.state.items}>
          <List items={this.state.items} />
        </Scrollable>
        <InputForm addVal={this.addVal} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
