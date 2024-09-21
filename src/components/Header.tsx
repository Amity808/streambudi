import React from 'react'


const Header = () => {
    return (
        <div className='  h-screen py-10 px-10 mt-20'>
            {/* <div>
            <div>
                Supercharge your events with STREAMBUDI with effective management and monitization
            </div>
            <div>
                <img src={"header.png"} alt="" />
            </div>
        </div> */}

            <div className="flex w-full flex-col lg:flex-row py-3">
                <div className="card grid flex-grow place-items-center pt-5">
                    {/* <div className='h-36'> */}
                    <span className=' text-black text-2xl  capitalize flex flex-col'>
                        <span className=' mb-3'>Supercharge your events with</span>
                        <span className='p-1 text-[#a30f1f]'>
                            <p className=' text-3xl'>STREAMBUDI</p>
                        </span>
                        <span className='mt-3'> with effective management and monitization</span>
                    </span>

                    {/* </div> */}
                    <span className=' mt-5'>
                        <p>Engage your audiences and monetize more effectively.</p>
                    </span>
                </div>
                <div className="card grid h-32 flex-grow place-items-center">
                    <div>
                        <img src={"header.png"} alt="header image" className=' w-[500px] h-[450px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header