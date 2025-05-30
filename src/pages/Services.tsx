import React from "react";
import Head from 'next/head';
import Analytics from '../components/Services';
import Cards from '../components/Cards';
import Quote from '../components/Quote';

export default function Page() {
  return (
    <>
      <Head>
        <title>Our Services | Web Development, SEO & Branding</title>
        <meta name="description" content="Explore our expert services in web development, search engine optimization, and brand identity design." />
        <meta name="keywords" content="web development, SEO, branding, digital services, Code Enclave" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Expert Digital Services | Code Enclave" />
        <meta property="og:description" content="Web development, SEO, and branding services to elevate your business." />
        <meta property="og:url" content="https://codeenclave.com/Services" />
        <meta property="og:site_name" content="Code Enclave" />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <Analytics />
        <Cards />
        <Quote />
      </div>
    </>
  );
}