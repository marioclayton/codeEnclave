import React from "react";
import Head from 'next/head';
import Privacy from '../components/Privacy';

export default function Page() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Code Enclave</title>
        <meta name="description" content="Read our privacy policy to understand how we collect, use, and protect your data." />
        <meta name="keywords" content="privacy policy, data protection, Code Enclave privacy" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Privacy Policy" />
        <meta property="og:description" content="Learn how we handle your data responsibly at Code Enclave." />
        <meta property="og:url" content="https://codeenclave.com/Privacy" />
        <meta property="og:site_name" content="Code Enclave" />
        <meta property="og:type" content="article" />
      </Head>
      <div>
        <Privacy />
      </div>
    </>
  );
}