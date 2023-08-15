import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Portfolio</title>
        <meta name="description" content="A showcase of AI projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>AI Portfolio</h1>
          <p>Showcasing innovative AI projects and solutions</p>
        </header>

        <section className={styles.section}>
          <h2>About Me</h2>
          <p>I am a passionate AI developer with experience in various domains of artificial intelligence.</p>
        </section>

        <section className={styles.section}>
          <h2>Projects</h2>
          <div className={styles.projectCard}>
            <h3>Chatbot for Customer Support</h3>
            <p>This chatbot helps to answer customer queries in real time, reducing the workload on human agents.</p>
          </div>
          <div className={styles.projectCard}>
            <h3>Image Recognition System</h3>
            <p>A system that can identify and classify objects in images with high accuracy.</p>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>Contact: email@example.com</p>
        </footer>
      </main>
    </>
  )
}