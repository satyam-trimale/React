import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter,setCounter] = useState(0)

const addValue = () => {
  if(counter<20){
    setCounter(counter+1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1 )
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)

    /*
    Understanding setCounter Behavior
setCounter updates the counter asynchronously.
If you directly do setCounter(counter + 1), React might batch the updates and apply only the last one in the same render cycle.
However, using functional updates (prevCounter => prevCounter + 1), React ensures that every update is based on the latest state.

Batching Behavior in React 🔄
→ Direct state updates in the same cycle might collapse into one unless functional updates are used.
    */
  }
}
const removeValue = () => {
  if(counter>0){

    setCounter(counter-1)
  }
}
  return (
    <>
     <h1>Chai Aur React {counter}</h1>
     <button onClick={addValue}>Add Value {counter}</button>
     <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
