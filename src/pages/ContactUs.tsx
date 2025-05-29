import React from "react";
import ContactUs from '../components/ContactUs'; 

export const metadata = {
  title: 'Contact Us | Code Enclave',
  description: 'Get in touch with Code Enclave to start your next project or request a consultation.',
  keywords: ['contact', 'web design consultation', 'talk to Code Enclave'],
  openGraph: {
    title: 'Contact Code Enclave',
    description: 'Start a conversation with our team today.',
    url: 'https://codeenclave.com/ContactUs',
    siteName: 'Code Enclave',
    type: 'website',
  },
};



export default function Page() {
  return (
    <div>
      <ContactUs />
    </div>
  );
};