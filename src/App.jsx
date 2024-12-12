import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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