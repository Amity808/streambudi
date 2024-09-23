import Image from 'next/image'
import { title } from 'process'
import React from 'react'




const feature = [
    {
        title: "Connect StreamBudi to your favorite streaming platform",
        image: '/how/create.png',
    },


    {
        title: "Set up interactive features for your stream",
        image: '/how/analyze.png',
    },


    {
        title: "Engage your audience and boost your earnings",
        image: '/how/interact.png',
    }
]


const HowitWorks = () => {
    return (
        <div className='h-screen py-10 bg-dark/40 relative'>
            <div className='w-10/12 m-auto text-dust'>
                <div>
                    <p className='font-bold text-dust text-center text-[50px]'>How StreamBudi Works</p>
                </div>
                <div className='grid grid-cols-3 p-10 text-center gap-4'>

                    {feature.map((item: any, index: number) => {

                        return (
                            <div key={index + item.title} className='border border-light-green rounded-xl p-3' >
                                <div className='w-full h-[300px] overflow-hidden'>
                                    <Image src={item.image} alt={item.title} width={400} height={400} />

                                </div>

                                <p className='text-[40px]'>{item.title}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default HowitWorks