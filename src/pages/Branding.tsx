import React from "react";
import Head from 'next/head';
import Branding from '../components/Branding';

export default function Page() {
  return (
    <>
      <Head>
        <title>Branding & Identity Design | Code Enclave</title>
        <meta name="description" content="Develop a strong visual identity with logo design, color palettes, typography, and brand strategy." />
        <meta name="keywords" content="branding, logo design, brand identity, visual design" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Branding & Logo Design Services" />
        <meta property="og:description" content="Craft a brand that speaks volumes. Identity design, logo packages, and visual strategy." />
        <meta property="og:url" content="https://codeenclave.com/Branding" />
        <meta property="og:site_name" content="Code Enclave" />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <Branding />
      </div>
    </>
  );
}