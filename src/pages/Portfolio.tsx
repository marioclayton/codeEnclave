import React from "react";
import Head from 'next/head';
import Portfolio from '../components/portfolio';
import Testimonials from '../components/Testimonials';

export default function Page() {
  return (
    <>
      <Head>
        <title>Portfolio | Our Web Design & Development Work</title>
        <meta name="description" content="Browse our portfolio of custom websites, SEO projects, and brand designs." />
        <meta name="keywords" content="portfolio, web design examples, case studies, Code Enclave" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Code Enclave Portfolio" />
        <meta property="og:description" content="A showcase of our web development, SEO, and branding projects." />
        <meta property="og:url" content="https://codeenclave.com/Portfolio" />
        <meta property="og:site_name" content="Code Enclave" />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <Portfolio />
        <Testimonials />
      </div>
    </>
  );
}