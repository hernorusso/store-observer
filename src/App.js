import React from 'react';
import './App.css';
import { List } from './pages/home/list';
import { store } from './store';


const App = () => {
  const state = store.getState();
  return (
    <div className="App">
      <List list={state.items}/>
    </div>
  )
}

export default App;
