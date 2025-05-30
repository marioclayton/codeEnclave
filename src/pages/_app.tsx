import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';
import ScrollToTop from '../components/scrollToTop';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}