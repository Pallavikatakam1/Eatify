import { useState } from 'react'
import './App.css'
import RouterFile from './Routerfile.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterFile />
  )
}

export default App
