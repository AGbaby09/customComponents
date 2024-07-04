import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import SizedBox from './components/SizedBox/SizedBox'

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
    <main id="App" className='center' style={{width: width, height: height}}>
      <SizedBox w={100} h={100} className={"center"}>
        <Home />
      </SizedBox>
    </main>
  )
}

export default App;