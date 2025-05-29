import React from "react";
import Analytics from '../components/Services';
import Cards from '../components/Cards';
import Quote from '../components/Quote';

export const metadata = {
  title: 'Our Services | Web Development, SEO & Branding',
  description: 'Explore our expert services in web development, search engine optimization, and brand identity design.',
  keywords: ['web development', 'SEO', 'branding', 'digital services', 'Code Enclave'],
  openGraph: {
    title: 'Expert Digital Services | Code Enclave',
    description: 'Web development, SEO, and branding services to elevate your business.',
    url: 'https://codeenclave.com/Services',
    siteName: 'Code Enclave',
    type: 'website',
  },
};


export default function Page() {
  return (
    <div>
      <Analytics />
      <Cards />
      <Quote />
    </div>
  );
};