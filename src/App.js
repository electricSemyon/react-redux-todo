import React, { Component } from 'react';
import Container from './Container';
import NoteCreator from './NoteCreator';

import HashGenerator from './utils/HashGenerator'

import Store from './Store';

const hashGenerator = new HashGenerator();

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
          Store.addNote(hashGenerator.make(), body)}/>
        <Container className='container' notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
