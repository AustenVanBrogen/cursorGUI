import { useState } from 'react'
import './App.css'
import CursorContainer from './components/CursorContainer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CursorContainer></CursorContainer>
    </>
  )
}

export default App
