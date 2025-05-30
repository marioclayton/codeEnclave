import React from "react";
import Head from 'next/head';
import ContactUs from '../components/ContactUs'; 

export default function Page() {
  return (
    <>
      <Head>
        <title>Contact Us | Code Enclave</title>
        <meta name="description" content="Get in touch with Code Enclave to start your next project or request a consultation." />
        <meta name="keywords" content="contact, web design consultation, talk to Code Enclave" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Contact Code Enclave" />
        <meta property="og:description" content="Start a conversation with our team today." />
        <meta property="og:url" content="https://codeenclave.com/ContactUs" />
        <meta property="og:site_name" content="Code Enclave" />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <ContactUs />
      </div>
    </>
  );
}