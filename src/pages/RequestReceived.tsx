import React from "react";
import RequestReceived from '../components/RequestReceived';



export const metadata = {
  title: 'We received your request | Code Enclave',
  description: 'We received your request.',
  keywords: ['request', 'received'],
  openGraph: {
    title: 'Branding & Logo Design Services',
    description: 'We received your request.',
    url: 'https://codeenclave.com/RequestReceived',
    siteName: 'Code Enclave',
    type: 'website',
  },
};

export default function Page() {
  return (
    <div>
      <RequestReceived />
    </div>
  );
};