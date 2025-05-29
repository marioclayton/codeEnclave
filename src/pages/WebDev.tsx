import React from "react";
import WebDev from '../components/WebDev';

export const metadata = {
  title: 'Web Development Services | Code Enclave',
  description: 'Custom websites built with clean code, performance optimization, and mobile responsiveness in mind.',
  keywords: ['custom websites', 'frontend development', 'responsive design', 'Next.js developers'],
  openGraph: {
    title: 'Custom Web Development | Code Enclave',
    description: 'We build fast, beautiful, and scalable websites tailored to your brand.',
    url: 'https://codeenclave.com/WebDev',
    siteName: 'Code Enclave',
    type: 'website',
  },
};


export default function Page() {
  return (
    <div>
      <WebDev />
    </div>
  );
};