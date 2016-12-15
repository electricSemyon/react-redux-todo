import React, { Component } from 'react';
import Note from './Note'

import Store from './Store';

class Container extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        {this.props.notes.map((el, i) => {
          return <Note body={el.body} id={el.id}/>
        })}
      </div>
    );
  }
}

module.exports = Container;
