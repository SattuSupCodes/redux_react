import { useState } from 'react'

import './App.css'
import CounterComponent from './components/CounterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CounterComponent></CounterComponent>
      
    </>
  )
}

export default App
// where is my index js brooo