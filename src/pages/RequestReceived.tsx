import React from "react";
import Head from 'next/head';
import RequestReceived from '../components/RequestReceived';

export default function Page() {
  return (
    <>
      <Head>
        <title>We received your request | Code Enclave</title>
        <meta name="description" content="We received your request." />
        <meta name="keywords" content="request, received" />
        {/* Open Graph tags */}
        <meta property="og:title" content="We received your request | Code Enclave" />
        <meta property="og:description" content="We received your request." />
        <meta property="og:url" content="https://codeenclave.com/RequestReceived" />
        <meta property="og:site_name" content="Code Enclave" />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <RequestReceived />
      </div>
    </>
  );
}