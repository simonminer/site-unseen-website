import Script from 'next/script'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>

      <heading>
        <Image src="/site-unseen-logo.png" width="300" height="300" alt="Site Unseen Logo"/>
      </heading>

      <Component {...pageProps} />

      <footer>
          &copy; {`${new Date().getFullYear()}`} &nbsp; <Link href="/">Site Unseen</Link> &nbsp; | &nbsp;
          <Link href="./privacy">Privacy Policy</Link>
      </footer>

    </>
  );
}

export default MyApp
