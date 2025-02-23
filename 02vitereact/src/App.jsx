import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter,setCounter] = useState(0)

const addValue = () => {
  if(counter<20){
    setCounter(counter+1)

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
