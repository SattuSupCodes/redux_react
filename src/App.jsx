import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import CounterComponent from './components/CounterComponent'
import EffectComponent from './components/Effect'
import Timer from './components/Timer'
function App() {
  const [count, setCount] = useState(0)
  const[isVisible, setVisible] = useState(true)

  return (
    <>

    <CounterComponent></CounterComponent>
    {/* <EffectComponent></EffectComponent> */}
    {isVisible?<EffectComponent/> :<></>}
    <button onClick={() => setVisible(!isVisible)}>Toggle</button>
    <Timer></Timer>
    </>
  )
}

export default App
// where is my index js brooo
// why this kolaveri dii