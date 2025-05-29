import React from "react";
import SEO from '../components/SEO';

export const metadata = {
  title: 'SEO Services | Boost Your Search Ranking',
  description: 'Get found online with strategic SEO services including on-page optimization, keyword research, and performance audits.',
  keywords: ['SEO services', 'search engine optimization', 'improve Google ranking', 'local SEO'],
  openGraph: {
    title: 'SEO Services That Work | Code Enclave',
    description: 'Drive traffic and rank higher with expert SEO services tailored to your business.',
    url: 'https://codeenclave.com/SEO',
    siteName: 'Code Enclave',
    type: 'website',
  },
};


export default function Page() {
  return (
    <div>
      <SEO />
    </div>
  );
};