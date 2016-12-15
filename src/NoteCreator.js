import React, { Component } from 'react';
import Store from './Store';

class NoteCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  updateText(event) {
    this.setState({text: event.target.value});
  }
  render() {
    return (<div className="noteCreator">
      <textarea className="inputText" onChange={this.updateText.bind(this)}/>
      <input value="Add" type="button" onClick={() => this.props.onClick(this.state.text)}/>
    </div>)
  }
}

export default NoteCreator;
