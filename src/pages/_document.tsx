import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Code Enclave LLC</title>
        <meta name="description" content="Helping small and medium-sized businesses establish a strong and effective online presence." />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preload" as="image" href="/assets/bgimage.webp" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}