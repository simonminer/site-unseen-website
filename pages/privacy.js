import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Privacy Policy: Site Unseen</title>
        <meta name="description" content="Site Unseen Privacy Policy" />
      </Head>

      <main className={styles.main}>
        <Image src="/site-unseen-logo.png" width="300" height="300" alt="Site Unseen Logo"/>
        <h1 className={styles.title}>
          Privacy Policy
        </h1>

        <p className={styles.description}>
          Site unseen does not collect or store your personal information. Since we don’t collect these details, we also do not share them with third parties.
        </p>

        <p className={styles.description}>
          <Link href="https://siteunseen.dev">siteunseen.dev</Link> uses Google Analytics to track website usage and visitor traffic anonymously.
        </p>
      </main>

      <footer className={styles.footer}>
          &copy; {`${new Date().getFullYear()}`} Site Unseen
      </footer>
    </div>
  )
}
