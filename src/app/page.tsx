import React from "react";
import Analytics from '../components/Services';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactUs';
import Portfolio from '../components/portfolio';
import Testimonials from '../components/Testimonials';

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero /> 
      <Analytics />
      <Cards />
      <Portfolio />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};