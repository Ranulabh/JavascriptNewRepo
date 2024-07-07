import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    username: "Ranu",
    age:16
  }

  let myArr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
     <Card userName="Arjun" btnText="Click me" />
     <Card userName="Ranu" btnText="Visit me"/>
     
    </>
  )
}

export default App
