import {createStore} from 'redux';

const initialState = {
  notes: JSON.parse(localStorage.getItem('notes')) || []
}

const reducer = (store, action) => {
  switch(action.type) {
    case 'ADD_NOTE':
      return {
        ...store,
        notes: [...store.notes, action.payload]
      };
    case 'DELETE_NOTE':
      return {
        ...store,
        notes: store.notes.filter(el => el.id !== action.payload.id)
      };
    default:
      return store;
  }
}

const store = createStore(reducer, initialState);

const addNote = (id, body) => {
  return store.dispatch({type: 'ADD_NOTE', payload: {id, body}});
}

const deleteNote = (id) => {
  return store.dispatch({type: 'DELETE_NOTE', payload: {id}});
}

const subscribe = (callback) => {
  store.subscribe(() => {
    callback();
  });
}

const getState = () => {
  return store.getState();
}

const Store = {
  addNote,
  deleteNote,
  subscribe, 
  getState
};

export default Store;
