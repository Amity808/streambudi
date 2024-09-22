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
        <div className='h-screen py-10 relative'>

            <div className='w-10/12 m-auto text-dust'>
                <div>
                    <p className='font-bold text-dust'>Features That Set You Apart</p>
                </div>
                <div>
                    <div className="flex w-full flex-col lg:flex-row gap-4 px-3">
                        <div className="card  rounded-box grid h-[250px]  flex-grow place-items-center">
                            <div>
                                <img src={"pay.png"} alt="pay" />
                                <p className=' font-semibold text-xl text-black'>Get Paid</p>
                                <p>Monetize your content and connect <br /> with your audience</p>
                            </div>
                        </div>
                        <div className="card  rounded-box grid h-[250px] flex-grow place-items-center">
                            <div>
                                <img src={"cumm.png"} alt="pay" />
                                <p className='font-semibold text-xl text-black'>Community Engagement</p>
                                <p>Stay connect with your audience <br /> and community</p>
                            </div>
                        </div>
                        <div className="card  rounded-box grid h-[250px] flex-grow place-items-center">
                            <div>
                                <img src={"time.png"} alt="time" />
                                <p className=' font-semibold text-xl text-black'>Reward Value</p>
                                <p>Get Value for every content you make</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className='left-0 h-screen w-screen  absolute top-0'>
                <div className='h-screen w-screen  bg-gradient-to-b from-dark to-dark/20 absolute top-0'>
                </div>
                <Image src={'/landing/stream.png'} alt='stream collage' fill={true} />
            </div>
        </div>
    )
}

export default Features