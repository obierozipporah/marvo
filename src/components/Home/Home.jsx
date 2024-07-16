import React from 'react'
import Hero from '../Hero/Hero'
import ProductsCard from '../ProductsCard/ProductsCard'
import HpElitebook from '../Hp-Elitebook/Hp-Elitebook'
import DellXPSSeries from '../Dell-XPS-Series/Dell-XPS-Series'
import LenovoThinkpad from '../Lenovo-Thinkpad/Lenovo-Thinkpad'
import BestLaptop from '../BestLaptop/BestLaptop'

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductsCard />
      <HpElitebook />
      <DellXPSSeries />
      <LenovoThinkpad />
      <BestLaptop />
    </div>
  )
}

export default Home
