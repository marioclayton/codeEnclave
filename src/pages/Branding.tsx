import React from "react";
import Branding from '../components/Branding';

export const metadata = {
  title: 'Branding & Identity Design | Code Enclave',
  description: 'Develop a strong visual identity with logo design, color palettes, typography, and brand strategy.',
  keywords: ['branding', 'logo design', 'brand identity', 'visual design'],
  openGraph: {
    title: 'Branding & Logo Design Services',
    description: 'Craft a brand that speaks volumes. Identity design, logo packages, and visual strategy.',
    url: 'https://codeenclave.com/Branding',
    siteName: 'Code Enclave',
    type: 'website',
  },
};


export default function Page() {
  return (
    <div>
      <Branding />
    </div>
  );
};