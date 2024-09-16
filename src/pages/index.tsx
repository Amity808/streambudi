import React from 'react'
import Navbar from "../components/Navbar"
import Header from '@/components/Header'
import Features from '@/components/Features'



const Home = () => {
  return (
    <div className=' bg-white h-full'>
      <div>
        <Navbar />
        <Header />
        <Features />
      </div>
    </div>
  )
}

export default Home