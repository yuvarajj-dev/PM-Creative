import React from 'react'

export default function C_card(props) {
    return (
        <>
            <div>
                <div className='text-black font-bold text-3xl underline hover:text-blue-400 text-center pb-10 cursor-pointer'>
                    <h1>{props.title}</h1>
                </div>
                <div className='w-full grid xl:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        props.api.map((val) => (

                            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 mx-auto shadow-lg my-5">
                                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                                    <img className='w-full h-full' src={val.img} alt={val.name} />
                                </div>
                                <div className="p-6">
                                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        {val.name}
                                    </h5>
                                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                        Minimum Quantity: {val.qut}
                                    </p>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </>
    )
}
