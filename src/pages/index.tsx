import React from "react";
import Head from 'next/head';
import Analytics from '../components/Services';
import Cards from '../components/Cards';
import Hero from '../components/Hero';
import ContactUs from '../components/ContactUs';
import Portfolio from '../components/portfolio';
import Testimonials from '../components/Testimonials';

export default function Page() {
  return (
    <>
      <Head>
        <title>Code Enclave | Elegant Web Solutions in Tallahassee</title>
        <meta name="description" content="We craft modern, conversion-focused websites for small and medium-sized businesses. Based in Tallahassee, serving clients nationwide." />
        <meta name="keywords" content="web design, web development, Tallahassee, Code Enclave, responsive websites, small business websites" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Code Enclave | Elegant Web Solutions" />
        <meta property="og:description" content="Modern, conversion-focused websites tailored to your business goals." />
        <meta property="og:url" content="https://codeenclave.com" />
        <meta property="og:site_name" content="Code Enclave" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <Hero /> 
        <Analytics />
        <Cards />
        <Portfolio />
        <Testimonials />
        <ContactUs />
      </div>
    </>
  );
}