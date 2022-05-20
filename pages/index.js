import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Site.Unseen.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Site Unseen</title>
        <meta name="description" content="Site Unseen: A JavaScript library, browser extension, and web app to build empathy for blind web users" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Site Unseen
        </h1>

        <p className={styles.description, styles.mainidea}>
          A tool to help you understand how blind people use the web.
        </p>

        <Link href="https://chrome.google.com/webstore/detail/site-unseen/aflfgnngnnhdoffmmpmakkdflfedldlh">
          <button className={styles.cta}>Get the Extension</button>
        </Link>

        <p className={styles.description}>
          People who are blind browse the web very differently than sighted users. Site Unseen helps you appreciate how blind users interact with web pages by obscuring the page and providing a screen reader emulator to explore its content. Use this browser extension to foster empathy in yourself and your community for those with vision disabilities, build the case for accessible web design, and test for web accessibility issues.

        </p>
        
        <p className={styles.description}>
          Site Unseen is based on <Link href="https://inclusiville.com/">Inclusiville</Link>, the <Link href="https://www.deque.com/blog/deque-hosts-first-virtual-axe-hackathon/">award-winning</Link> empathy-building game for web accessibility, and powered by the <Link href="https://github.com/dequelabs/axe-core">axe-core library</Link>.
        </p>

      </main>
    </div>
  )
}
