import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Site Unseen</title>
        <meta name="description" content="Site Unseen: A JavaScript library, browser extension, and web app to build empathy for blind web users" />
      </Head>

      <main className={styles.main}>
        <Image src="/site-unseen-logo.png" width="300" height="300" alt="Site Unseen Logo"/>
        <h1 className={styles.title}>
          Site Unseen
        </h1>

        <p className={styles.description}>
          Site Unseen is an up and coming JavaScript library, browser extension, and web app that allows you to interact with any web page in the same way a person with blindness would experience it.
        </p>
        
        <p className={styles.description}>
          Based on <Link href="https://inclusiville.com/">Inclusiville</Link>, the <Link href="https://www.deque.com/blog/deque-hosts-first-virtual-axe-hackathon/">award-winning</Link> empathy-building game for web accessibility, Site Unseen hides all visible elements on a web page and provides you with a simulated screen reader to explore its contents.  Use keyboard commands to move through the elements on a page, viewing the name, role, and value of each one as it comes into focus and interacting with it using only your keyboard.
        </p>

        <p className={styles.description}>
          <Link href="https://github.com/simonminer/site-unseen">Check out our Github repository</Link> and stay tuned.
        </p>
      </main>

      <footer className={styles.footer}>
          &copy; {`${new Date().getFullYear()}`} Site Unseen
      </footer>
    </div>
  )
}
