import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/page.module.css'

export default function Home() {
  return (
    <>
     <Head>
        <title>Sky Blog | Home Page</title>
      </Head>
      
     <nav className={styles.mainnav}>
        <ul>
          <li>Home</li>
          <li>Blogs</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

    <main className={styles.main}>
      <h1>SKY BLOG</h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Docs <span>-&gt;</span></h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </div>
        <div className={styles.card}>
          <h2>Learn <span>-&gt;</span></h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </div>
        <div className={styles.card}>
          <h2>Templates <span>-&gt;</span></h2>
          <p>Explore starter templates for Next.js.</p>
        </div>
        <div className={styles.card}>
          <h2>Deploy <span>-&gt;</span></h2>
          <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
        </div>
        
      </div>
    </main>
    </>
  )
}
