import React, { Component } from 'react';

class InputForm extends Component {
  componentWillMount() {
    this.setState({
      value: ''
    });
  }

  changeVal = event => {
    this.setState({
      value: event.target.value
    });
  };

  addVal = event => {
    event.preventDefault();
    if (this.state.value) {
      this.props.addVal(this.state.value);
      this.setState({ value: '' });
    }
    this.textInput.focus();
  };

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={this.changeVal}
          ref={input => {
            this.textInput = input;
          }}
        />
        <button onClick={this.addVal}>go</button>
      </div>
    );
  }
}

export default InputForm;
