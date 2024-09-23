import React from 'react'
import Navbar from "../components/Navbar"
import Header from '@/components/Header'
import Features from '@/components/Features'
import HowitWorks from '@/components/HowitWorks'



const Home = () => {
  return (
    <div className='h-full'>
      <div>
        <Navbar />
        <Header />
        <Features />
        <HowitWorks />
      </div>
    </div>
  )
}

export default Home