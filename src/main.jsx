import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Redux
import { Provider } from 'react-redux';
import { store } from './store';
import { TodoApp } from './TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
