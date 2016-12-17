import React, { Component } from 'react';

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
      <textarea ref="textInput" className="inputText" onChange={this.updateText.bind(this)}/>
      <input value="Add" type="button" onClick={() => {
        this.props.onClick(this.state.text);
        this.refs.textInput.value = '';
      }}/>
    </div>)
  }
}

export default NoteCreator;
