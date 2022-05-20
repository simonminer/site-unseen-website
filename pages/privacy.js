import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Site.Unseen.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Privacy Policy: Site Unseen</title>
        <meta name="description" content="Site Unseen Privacy Policy" />
      </Head>

      <main className={styles.main}>
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
    </div>
  )
}
