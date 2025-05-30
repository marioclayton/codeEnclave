'use client'

import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Navbar = () => {
  const [nav, setNav] = useState(true)
  const pathname = usePathname()

  const handleNav = () => {
    setNav(!nav)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/Services', label: 'Services' },
    { href: '/Portfolio', label: 'Portfolio' },
    { href: '/ContactUs', label: 'Contact Us' },
    { href: '/Quote', label: 'Quote' },
  ]

  const isActive = (href) => pathname === href

  return (
    <div className='z-50 sticky top-0 bg-[#000000] '>
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
        <Image
          src='/assets/logo.webp'
          alt='Logo'
          width={120}
          height={40}
          className='my-4'
          priority
        />
        <ul className='hidden md:flex'>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className='text-l p-4'
                style={isActive(href) ? { color: '#86efac' } : {}}
                aria-current={isActive(href) ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000000] ease-in-out duration-500' : 'fixed left-[-100%]'}
        >
          <Image
            src='/assets/logo.webp'
            alt='Logo'
            width={150}
            height={50}
            className='my-4'
            priority
          />
          <ul className='uppercase p-4'>
            {navLinks.map(({ href, label }) => (
              <li key={href} className='border-b border-gray-600'>
                <Link
                  href={href}
                  className='grid text-l p-4'
                  style={isActive(href) ? { color: '#86efac' } : {}}
                  aria-current={isActive(href) ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
