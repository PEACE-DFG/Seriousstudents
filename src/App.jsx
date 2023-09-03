import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Cont from './Pages/Cont'

function App() {
  return (
    <div>

    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Contact' element={<Cont/>}></Route>

    </Routes>

    </div>
  )
}

export default App