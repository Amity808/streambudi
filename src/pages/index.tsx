import React from 'react'
import Navbar from "../components/Navbar"
import Header from '@/components/Header'
import Features from '@/components/Features'
import Purpose from "@/components/Purpose"


const Home = () => {
  return (
    <div className='h-full'>
      <div>
        <Navbar />
        <Header />
        <Purpose />
        <Features />
      </div>
    </div>
  )
}

export default Home