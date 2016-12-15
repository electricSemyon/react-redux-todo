import {createStore} from 'redux';

const initialState = {
  notes: [{
    id: 1,
    text: 'sample text here'
  }]
}

const notes = (store, action) => {
  switch(action.type) {
    case 'ADD_NOTE':
      return {
        ...store,
        notes: [...store.notes, action.payload]
      }
  }
}

const store = createStore(notes, initialState);

store.dispatch({type: 'ADD_NOTE', payload: 'kek)))'})

console.log(store.getState());
