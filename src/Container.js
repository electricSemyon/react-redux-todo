import React, { Component } from 'react';
import Note from './Note'

class Container extends Component{
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
