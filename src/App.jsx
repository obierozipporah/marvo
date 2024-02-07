import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Headphones from './pages/Headphones/Headphones'

function App() {

  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='headphones' element={<Headphones />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
