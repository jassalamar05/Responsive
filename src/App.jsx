import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Add from './Component/Add'
import { Toaster } from 'react-hot-toast'
import Edit from './Component/Edit'
import Update from './Component/Update'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Toaster position="top-right" reverseOrder={false} />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/add" element={<Add />} />
    <Route path="/edit" element={<Edit />} />
    <Route path="/update" element={<Update />} />

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
