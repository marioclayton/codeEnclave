import React from "react";
import Quote from '../components/Quote';

export const metadata = {
  title: 'Request a Quote | Code Enclave',
  description: 'Tell us about your project and get a free quote tailored to your needs.',
  keywords: ['get a quote', 'web design pricing', 'custom website quote'],
  openGraph: {
    title: 'Get a Free Web Design Quote',
    description: 'Get an estimate for your custom website or branding project.',
    url: 'https://codeenclave.com/Quote',
    siteName: 'Code Enclave',
    type: 'website',
  },
};


export default function Page() {
  return (
    <div>
      <Quote />
    </div>
  );
};