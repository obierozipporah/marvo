import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Headphones from './pages/Headphones/Headphones'
import Speakers from './pages/Speakers/Speakers'
import Earphones from './pages/Earphones/Earphones'
import data from "../resources/data.json"

function App() {

  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='headphones' element={<Headphones data={data}/>}/>
          <Route path='speakers' element={<Speakers data={data}/>}/>
          <Route path='earphones' element={<Earphones data={data}/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
