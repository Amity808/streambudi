import React from 'react'


const Header = () => {
    return (
        <div className='h-screen relative w-10/12 m-auto text-dust flex w-full leading-tight flex-col lg:flex-col justify-center pt-[100px] items-center'>
            <div className='flex flex-col justify-center space-y-4 items-center'>
                <p className='text-[70px] w-8/12 m-auto  text-dust text-center  '>
                    <span className='text-clear-green underline'>Supercharge</span> Your Stream with StreamBudi</p>
                <p className=' text-[20px]'>
                    Engage your audience like never before with interactive features powered by Solana blockchain
                </p>
                <a href='#' className='p-2  bg-light-green text-[14px] shadow hover:bg-light-green/50 text-dark rounded-xl mt-3'>
                    Get Started, it's free
                </a>
            </div>

        </div>
    )
}

export default Header  