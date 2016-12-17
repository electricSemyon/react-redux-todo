import React, { Component } from 'react';
import Container from './Container';
import NoteCreator from './NoteCreator';

import generateHash from '../Utils/HashGenerator'

import Store from '../Store/Store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {notes: Store.getState().notes}

    Store.subscribe(() => {
      localStorage.setItem('notes', JSON.stringify(Store.getState().notes))
      this.setState({notes: Store.getState().notes});
    });
  }
  render() {
    return (
      <div>
        <NoteCreator onClick={(body) => 
          Store.addNote(generateHash(), body)}/>
        <Container className='container' notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
