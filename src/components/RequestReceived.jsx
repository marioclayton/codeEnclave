import React from 'react'
import Link from 'next/link'

const RequestReceived = () => {
    return (
        <div className='text-white overlay-container '>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center overlay-content animate-fade-in-up'>
                <h1 className='md:text-5xl sm:text-4xl text-3xl  md:py-6'>
                    We have received your request!
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-3xl sm:text-3xl text-xl  py-4'>
                        We will be in contact with your shortly.
                    </p>
                </div>
                <Link href='/' className='animate-pulse bg-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-auto text-xl py-3 text-black text-l p-4 text-center'>
                    HOME PAGE
                </Link>
            </div>
        </div>
    )
}

export default RequestReceived