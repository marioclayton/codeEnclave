'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <Image
          src='/assets/logo.webp'
          alt='Logo'
          width={150}
          height={50}
          className='my-4'
          priority
        />
        <p className='py-4'>Helping small and medium-sized businesses establish a strong and effective online presence.</p>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-gray-400'>Solutions</h6>
          <ul>
            <li className='py-2 text-sm'><Link href='/WebDev'>Web Development</Link></li>
            <li className='py-2 text-sm'><Link href='/SEO'>SEO</Link></li>
            <li className='py-2 text-sm'><Link href='/Branding'>Branding</Link></li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Support</h6>
          <ul>
            <li className='py-2 text-sm'><Link href='/Services'>Pricing</Link></li>
            <li className='py-2 text-sm'><Link href='/ContactUs'>Contact Us</Link></li>
            <li className='py-2 text-sm'><Link href='/Quote'>Quote</Link></li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul>
            <li className='py-2 text-sm'><Link href='/'>Home</Link></li>
            <li className='py-2 text-sm'><Link href='/Services'>Services</Link></li>
            <li className='py-2 text-sm'><Link href='/Portfolio'>Portfolio</Link></li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
            <li className='py-2 text-sm'><Link href='/Privacy'>Privacy</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
