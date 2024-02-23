import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Checkout from "./pages/Checkout/Checkout"
import ProductPage from './pages/ProductPage/ProductPage'

function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])

  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/:category' element={<ProductPage/>}/>
          <Route path='/:category/:id' element={<ProductDetails/>}/>
          <Route path='/checkout' element={<Checkout />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
