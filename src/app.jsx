import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider} from 'react-redux';
import Perf from 'react-addons-perf';
import Main from './Main';
import {Schema, arrayOf, normalize } from 'normalizr';
window.Perf = Perf;


const initialState = {
  items: [
    {
      id: 1,
      text: 'Hello world',
    },
    {
      id: 2,
      text: 'Hello world 2',
    },
    {
      id: 3,
      text: 'Hello world 3',
    },
  ]
};




const reducer = (state = initialState, action) => {

  console.log("got action ", action.type);
  switch(action.type) {

    case 'UPDATE' : {

      const id = action.payload.id;
      const items = state.items.concat();
      state.items.find( item => item.id === id ).text = "HOLA";
      return {items}

    }
    default:
      return state;

  }


}
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('index')
);
