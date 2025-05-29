import React from "react";
import Portfolio from '../components/portfolio';
import Testimonials from '../components/Testimonials';

export const metadata = {
  title: 'Portfolio | Our Web Design & Development Work',
  description: 'Browse our portfolio of custom websites, SEO projects, and brand designs.',
  keywords: ['portfolio', 'web design examples', 'case studies', 'Code Enclave'],
  openGraph: {
    title: 'Code Enclave Portfolio',
    description: 'A showcase of our web development, SEO, and branding projects.',
    url: 'https://codeenclave.com/Portfolio',
    siteName: 'Code Enclave',
    type: 'website',
  },
};


export default function Page() {
  return (
    <div>
      <Portfolio />
      <Testimonials />
    </div>
  );
};