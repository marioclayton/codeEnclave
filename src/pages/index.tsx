import React from "react";
import Analytics from '../components/Services';
import Cards from '../components/Cards';
import Hero from '../components/Hero';
import ContactUs from '../components/ContactUs';
import Portfolio from '../components/portfolio';
import Testimonials from '../components/Testimonials';

export const metadata = {
  title: 'Code Enclave | Elegant Web Solutions in Tallahassee',
  description: 'We craft modern, conversion-focused websites for small and medium-sized businesses. Based in Tallahassee, serving clients nationwide.',
  keywords: ['web design', 'web development', 'Tallahassee', 'Code Enclave', 'responsive websites', 'small business websites'],
  openGraph: {
    title: 'Code Enclave | Elegant Web Solutions',
    description: 'Modern, conversion-focused websites tailored to your business goals.',
    url: 'https://codeenclave.com',
    siteName: 'Code Enclave',
    locale: 'en_US',
    type: 'website',
  },
};


export default function Page() {
  return (
    <div>
      <Hero /> 
      <Analytics />
      <Cards />
      <Portfolio />
      <Testimonials />
      <ContactUs />
    </div>
  );
};