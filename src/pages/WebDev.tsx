import React from "react";
import Head from 'next/head';
import WebDev from '../components/WebDev';

export default function Page() {
  return (
    <>
      <Head>
        <title>Web Development Services | Code Enclave</title>
        <meta name="description" content="Custom websites built with clean code, performance optimization, and mobile responsiveness in mind." />
        <meta name="keywords" content="custom websites, frontend development, responsive design, Next.js developers" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Custom Web Development | Code Enclave" />
        <meta property="og:description" content="We build fast, beautiful, and scalable websites tailored to your brand." />
        <meta property="og:url" content="https://codeenclave.com/WebDev" />
        <meta property="og:site_name" content="Code Enclave" />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <WebDev />
      </div>
    </>
  );
}