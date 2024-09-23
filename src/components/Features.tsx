import Image from 'next/image'
import React from 'react'


const feature = [

    {
        title: "Live Auctions",
        subtitle: "Monetize your content with secure, blockchain - powered auctions"
    },


    { title: "Interactive Quizzes", subtitle: "Boost engagement with real - time quizzes and polls" },


    { title: "Seamless Giveaways", subtitle: "Run exciting giveaways to grow your audience" },
]


const Features = () => {
    return (
        <div className='h-screen py-10 bg-dark/40 relative'>
            <div className='w-10/12 m-auto text-dust'>
                <div>
                    <p className='font-bold text-dust text-center text-[50px]'>Features That Would Set You Apart</p>
                </div>
                <div className='grid grid-cols-3 p-10 text-center gap-4'>

                    {feature.map((item: any, index: number) => {

                        return (
                            <div key={index + item.title} className='border border-light-green rounded-xl p-3' >
                                <p className='text-[40px]'>{item.title}</p>
                                <p>{item.subtitle}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Features