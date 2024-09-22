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
            <div className='left-0 h-screen w-screen absolute top-0'>
                <div className='h-screen w-screen z-10 bg-gradient-to-b from-dark to-dark/50 absolute top-0'>

                </div>
                <Image src={'/landing/stream.png'} alt='stream collage' fill={true} />
            </div>
            <div className='w-10/12 m-auto z-50 text-dust'>

                <div className=' text-xl font-normal text-white flex flex-row lg:flex-row max-lg:flex-row md:flex-row max-md:flex-row sm:flex-col max-sm:flex-col py-8 justify-evenly'>
                    <p className=' mx-9 font-light text-xl'>We get you engage your audience while you monitize your content, and earn on quizes.</p>
                    <span className='font-light text-xl items-center px-7'>
                        <p>Monetize Your Content</p>
                        <button className=' p-3 text-sm font-semibold  text-black rounded-xl mt-2'>Try Today</button>

                    </span>
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
        </div>
    )
}

export default Features