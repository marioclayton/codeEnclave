import React from "react";
import Head from 'next/head';
import Quote from '../components/Quote';

export default function Page() {
  return (
    <>
      <Head>
        <title>Request a Quote | Code Enclave</title>
        <meta name="description" content="Tell us about your project and get a free quote tailored to your needs." />
        <meta name="keywords" content="get a quote, web design pricing, custom website quote" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Get a Free Web Design Quote" />
        <meta property="og:description" content="Get an estimate for your custom website or branding project." />
        <meta property="og:url" content="https://codeenclave.com/Quote" />
        <meta property="og:site_name" content="Code Enclave" />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <Quote />
      </div>
    </>
  );
}