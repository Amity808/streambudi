import React from 'react'



const Features = () => {
    return (
        <div className=' features h-[700px]'>

            <div className='  font-medium'>
                <div className=' text-xl font-normal text-white flex flex-row lg:flex-row max-lg:flex-row md:flex-row max-md:flex-row sm:flex-col max-sm:flex-col py-8 justify-evenly'>
                    <p className=' mx-9 font-light text-xl'>We get you engage your audience while you monitize your content, and earn on quizes.</p>
                    <span className='font-light text-xl items-center px-7'>
                        <p>Monetize Your Content</p>
                        <button className=' p-3 text-sm font-semibold bg-white text-black rounded-xl mt-2'>Try Today</button>

                    </span>
                </div>
                <div>
                    <div className="flex w-full flex-col lg:flex-row gap-4 px-3">
                        <div className="card bg-white rounded-box grid h-[250px]  flex-grow place-items-center">
                            <div>
                                <img src={"pay.png"} alt="pay" />
                                <p className=' font-semibold text-xl text-black'>Get Paid</p>
                                <p>Monetize your content and connect <br /> with your audience</p>
                            </div>
                        </div>
                        <div className="card bg-white rounded-box grid h-[250px] flex-grow place-items-center">
                        <div>
                                <img src={"cumm.png"} alt="pay" />
                                <p className='font-semibold text-xl text-black'>Community Engagement</p>
                                <p>Stay connect with your audience <br /> and community</p>
                            </div>
                        </div>
                        <div className="card bg-white rounded-box grid h-[250px] flex-grow place-items-center">
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