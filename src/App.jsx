import { useState } from 'react'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main id="App" className=''>
      <Home />
    </main>
  )
}

export default App
