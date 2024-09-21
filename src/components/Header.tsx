import Image from 'next/image'
import React from 'react'


const Header = () => {
    return (
        <div className='h-screen relative text-dust flex w-full leading-tight flex-col lg:flex-col justify-center items-center'>
            <p className='text-[150px] text-dust font-bold z-50 top-[20%] absolute'>StreamBudi</p>
            <p className='z-50 text-[20px]'>
                Supercharge your meetings and streams with the power of solana.
            </p>
            <button className='btn btn-primary mt-3'>
                Get Started
            </button>
            <div className='h-fill absolute bottom-0 w-screen overflow-hidden'>

                <Image src={'/reel.png'} alt='reel' height={100} width={1500} />
            </div>

        </div>
    )
}

export default Header  