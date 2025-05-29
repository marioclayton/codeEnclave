'use client'

import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
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
        <p className="bg-gradient-to-r from-green-300 via-white to-green-500 bg-clip-text text-xl tracking-tight text-transparent p-2">
          GROWING YOUR BUSINESS IN THE ONLINE WORLD
        </p>
        <h1 className="md:text-5xl sm:text-4xl text-3xl md:py-6">
          Code Enclave LLC
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-3xl text-xl py-4">
            Web Developement and Consulting
          </p>
        </div>
        <p className="md:text-2xl text-xl bg-gradient-to-r from-green-300 via-white to-green-500 bg-clip-text tracking-tight text-transparent py-10">
          We specialize in helping small and medium-sized businesses establish a strong and effective online presence.
        </p>
        <Link
          href="/Services"
          className="animate-pulse bg-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-auto text-xl py-3 text-black text-center flex items-center justify-center"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default Hero