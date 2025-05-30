import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const RequestReceived = () => {
    return (
        <>
            <Head>
                <title>Request Received | Code Enclave</title>
                <meta name="description" content="Thank you for your request. We will be in contact with you shortly." />
                <meta name="robots" content="noindex, follow" />
                {/* Open Graph tags */}
                <meta property="og:title" content="Request Received | Code Enclave" />
                <meta property="og:description" content="Thank you for your request. We will be in contact with you shortly." />
                <meta property="og:url" content="https://codeenclave.com/RequestReceived" />
                <meta property="og:site_name" content="Code Enclave" />
                <meta property="og:type" content="website" />
            </Head>
            <div
                className="
                    relative w-full min-h-screen
                    bg-[url('/assets/bgimage.webp')]
                    bg-cover bg-center bg-no-repeat
                    bg-black
                    before:absolute before:inset-0 before:bg-black/85 before:content-[''] before:z-0
                    flex items-center justify-center
                    bg-scroll md:bg-fixed
                "
            >
                <div className="max-w-[800px] w-full mx-auto text-center flex flex-col justify-center items-center animate-fade-in-up relative z-10 text-white">
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
        </>
    )
}

export default RequestReceived