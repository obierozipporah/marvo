import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'

import ProductPage from './pages/ProductPage/ProductPage'

function App() {

  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/:category' element={<ProductPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
