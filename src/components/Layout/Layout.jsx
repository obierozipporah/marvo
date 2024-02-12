import React from 'react'
import Header from '/src/components/Header/Header.jsx'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {

  // create an object to handle active link styling
  const activeLinks ={
    color: "#D87D4A",
    textDecoration: "underline"
  }

  return (
    <div>
        <Header activeLinks={activeLinks}/>
        <main>
          <Outlet />
        </main>
        <Footer activeLinks={activeLinks}/>
    </div>
  )
}

export default Layout
