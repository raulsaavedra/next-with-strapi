import { gql } from '@apollo/client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import client from '../src/client';
import styles from '../styles/Home.module.css';

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {articles.map((article) => (
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </a>
          ))}
          {articles.map((article) => (
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const { data } = await client.query({
    variables: {
      locale,
    },
    query: gql`
      query($locale: String!) {
        articles(locale: $locale) {
          id
          title
          description
        }
      }
    `,
  });

  return {
    props: {
      articles: data.articles,
    },
  };
}
