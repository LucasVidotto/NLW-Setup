import { useState } from 'react'
import Habits from './Components/Habits'
import './Styles/global.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Habits completed={3}/>
      <Habits completed={13}/>
      <Habits completed={32}/>
    </>
  )
}

export default App
