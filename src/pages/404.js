import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Page() {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>404 | Page Not Found | Code Enclave</title>
        <meta name="description" content="Sorry, the page you are looking for does not exist." />
        <meta name="robots" content="noindex, follow" />
        {/* Open Graph tags */}
        <meta property="og:title" content="404 | Page Not Found | Code Enclave" />
        <meta property="og:description" content="Sorry, the page you are looking for does not exist." />
        <meta property="og:url" content="https://codeenclave.com/404" />
        <meta property="og:site_name" content="Code Enclave" />
        <meta property="og:type" content="website" />
      </Head>
      <div
        className="
          relative w-full min-h-screen
          bg-[url('/assets/bgimage.webp')]
          bg-cover bg-center bg-no-repeat
          bg-black
          before:absolute before:inset-0 before:bg-black/85 before:content-[''] before:z-0
          flex items-center justify-center
          bg-scroll md:bg-fixed
        "
      >
        <div className="max-w-[800px] w-full mx-auto text-center flex flex-col justify-center items-center animate-fade-in-up relative z-10 text-white">
          <h1 className="text-4xl tracking-tight font-extrabold text-center text-white mb-10">404</h1>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">Oops! Page not found.</p>
          <button
            onClick={handleHomeClick}
            className='animate-pulse bg-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-auto text-xl py-3 text-black'
            aria-label="Go to home page"
          >
            <span className='text-l p-4'>Home</span>
          </button>
        </div>
      </div>
    </>
  );
}