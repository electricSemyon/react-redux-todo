import React, { Component } from 'react';
import Remarkable from 'remarkable';

import Store from './Store';

const md = new Remarkable();

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {completed: false};
  }
  render() {
    const completed = this.state.completed;

    return (
      <div className={"note " + (completed ? "completed" : "")}>
        <div className="hash">{this.props.id}</div>
        <div className="content" dangerouslySetInnerHTML={
          {__html: md.render(this.props.body)
            .replace(/(?:\r\n|\r|\n)/g, '<br />')}
        }/>
        <div className="options">
          <input type="button" value="✕" onClick={() => 
            Store.deleteNote(this.props.id)}/>
          <input type="button" value="✓" onClick={() => 
            this.setState({completed: !completed})}/>
        </div>
      </div>
    );
  }
}

export default Note;
