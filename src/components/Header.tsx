'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import AOS from "aos";
import "aos/dist/aos.css"


const Header = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    //    Supercharge your meetings and streams with the power of solana.
    return (
        <div className='h-screen relative text-dust flex w-full leading-tight flex-col lg:flex-col justify-center items-center'>
            <p className='text-[150px] text-dust font-bold z-50 top-[20%] absolute'>StreamBudi</p>
            <p className='z-50 text-[20px] text-center'>
               
                Supercharge Your Streaming Experience with Streambudi <br /> Leverage Solana's blockchain for enhanced engagement and new monetization tools.


            </p>
            <button className='btn btn-primary mt-3'>
                Get Started
            </button>
            <div className='h-fill absolute bottom-0 w-screen overflow-hidden' data-aos="fade-up" data-aos-duration="2000">

                <Image src={'/reel.png'} alt='reel' height={100} width={1500} />
            </div>
            
        </div>
    )
}

export default Header  