import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/LayoutRoute/Layout'
import Home from './components/Home/Home'

function App() {

  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
