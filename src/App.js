import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react'
import { StoreContext } from './index'
import './App.css'
import { List } from './pages/home/list'
import { store } from './store'
import { AddItem } from './pages/home/list/add-item'

const App = ({items}) => {

  const store = useContext(StoreContext)
  const [appState, setAppSate ] = useState(store.getState());
  let count = 3;
  const onClick = useCallback(() => {
    count++;
    store.setState({
      id: `id_hernan_${count}`,
      name: 'hernan',
      price: 500,
      description: 'article description',
    })
  }, [count, store]);

  useEffect(() => {
    store.subscribe((state) => {
      setAppSate(state);
    })
    return store.unSubscribe();
  }, [store]);

  console.log(appState, 'appState');

  return (
    <div className="App">
      <List list={appState.items}/>
      <AddItem onClick={onClick}/>
    </div>
  )
}

store.subscribe((state) => {
  console.log('subscriber cb')
  return <App state={state}/>
})

export default App
