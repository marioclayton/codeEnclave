import React from "react";
import Privacy from '../components/Privacy';

export const metadata = {
  title: 'Privacy Policy | Code Enclave',
  description: 'Read our privacy policy to understand how we collect, use, and protect your data.',
  keywords: ['privacy policy', 'data protection', 'Code Enclave privacy'],
  openGraph: {
    title: 'Privacy Policy',
    description: 'Learn how we handle your data responsibly at Code Enclave.',
    url: 'https://codeenclave.com/Privacy',
    siteName: 'Code Enclave',
    type: 'article',
  },
};


export default function Page() {
  return (
    <div>
      <Privacy />
    </div>
  );
};