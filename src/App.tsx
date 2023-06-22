import { useState } from 'react';
import { Item } from "./types/Item"
import ListItem from "./components/ListItem";
import AdTarf from './components/AdTarf';

import './App.css'

function App() {

  const [list, setList] = useState<Item[]>([
    {
      id: 1, name: "comprar pão!", done: false
    },
    {
      id: 2, name: "abastecer carro!", done: false
    }
  ]);

  const handleAdTarf = (tarefName: string) => {
    const newList = [...list]
    newList.push({
      id: list.length + 1, 
      name:tarefName,
      done: false
    });
    setList(newList);
  }
  return (
    <div>
      <h1>
        hello!!
      </h1>

      <AdTarf onEnter={handleAdTarf} />
      
      {list.map((item, index)=>(
      
      <ListItem key={index} item={item} />
        ))}
    </div>
  )
}

export default App

// <div>{item.name}</div>