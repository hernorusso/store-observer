import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react'
import { StoreContext } from './index'
import './App.css'
import { List } from './pages/home/list'
import { AddItem } from './pages/home/list/add-item'

const App = ({items}) => {

  const store = useContext(StoreContext)
  const [appState, setAppSate ] = useState(store.getState());
  const [count, setCount] = useState(2);
  let name = count % 2 ? "Hernan" : "Mauro";
  let id = `id_hernan_${count}`;
  let price = `50${count}`;
  let rowColor = count % 2 ? "green" : "orange";

  const onClick = useCallback(() => {
    store.setState({
      id,
      name,
      price,
      description: 'article description',
    })
    setCount(count + 1);
  }, [count, store]);

  useEffect(() => {
    store.subscribe((state) => {
      setAppSate(state);
    })
    return store.unSubscribe();
  }, [store]);

  return (
    <div className="App">
      <AddItem onClick={onClick}/>
      <List list={appState.items} rowColor={rowColor}/>
    </div>
  )
}

export default App
