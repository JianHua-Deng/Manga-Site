import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Shelf from './components/Shelf'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Shelf title="Attack on Titan"></Shelf>
    </>
  )
}

export default App
