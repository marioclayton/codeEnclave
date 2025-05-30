import React from "react";
import Head from 'next/head';
import SEO from '../components/SEO';

export default function Page() {
  return (
    <>
      <Head>
        <title>SEO Services | Boost Your Search Ranking</title>
        <meta name="description" content="Get found online with strategic SEO services including on-page optimization, keyword research, and performance audits." />
        <meta name="keywords" content="SEO services, search engine optimization, improve Google ranking, local SEO" />
        {/* Open Graph tags */}
        <meta property="og:title" content="SEO Services That Work | Code Enclave" />
        <meta property="og:description" content="Drive traffic and rank higher with expert SEO services tailored to your business." />
        <meta property="og:url" content="https://codeenclave.com/SEO" />
        <meta property="og:site_name" content="Code Enclave" />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <SEO />
      </div>
    </>
  );
}