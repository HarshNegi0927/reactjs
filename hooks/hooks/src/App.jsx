import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = ()=>{
    setCounter(counter+1);
  }
  const removeValue = ()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Couter Function</h1>
      <h2>Couter Value:{counter}</h2>
      <button className='margin' onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Decrese Value</button>
    </>
  )
}

export default App
