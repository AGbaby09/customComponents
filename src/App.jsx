import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import SizedBox from './components/SizedBox/SizedBox'
import CenteredBox from './components/CenteredBox/CenteredBox'

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const setDimensions = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(()=>{
    setDimensions()
  }, [width, height])

  return (
    <main id="App" className='' style={{width: width, height: height}}>
      <CenteredBox w={100} h={100}>
        <Home />
      </CenteredBox>
    </main>
  )
}

export default App
