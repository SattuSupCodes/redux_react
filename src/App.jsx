import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import CounterComponent from './components/CounterComponent'
import EffectComponent from './components/Effect'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CounterComponent></CounterComponent>
    <EffectComponent></EffectComponent>
    </>
  )
}

export default App
// where is my index js brooo