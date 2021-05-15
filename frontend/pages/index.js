import { gql } from '@apollo/client';
import Link from 'next/link';

import client from '../src/client';
import {
  CardTitle,
  HeadingPrimary,
  Paragraph,
  Span,
} from '../components/Typography';
import { Container } from '../components/styles/Container';
import { Card, CardImage, CardList, Hero } from '../components/styles/General';

export default function Home({ articles }) {
  console.log(articles);
  return (
    <Container>
      <Hero>
        <HeadingPrimary
          color="blueLight"
          fontWeight="700"
          textAlign="center"
          marginBottom="3"
        >
          The Next with <Span color="blueDark">Strapi Blog</Span>
        </HeadingPrimary>
        <Paragraph color="grayPrimary" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet.
        </Paragraph>
      </Hero>
      <CardList>
        {articles.map((article) => (
          <Link key={article.id} href={`/article/${article.id}`}>
            <Card>
              <CardImage>
                <img src={`http://localhost:1337${article.thumbnail[0].url}`} />
              </CardImage>
              <CardTitle color="black">{article.title}</CardTitle>
              <Paragraph color="grayPrimary">{article.description}</Paragraph>
            </Card>
          </Link>
        ))}
      </CardList>
    </Container>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        articles {
          id
          title
          description
          thumbnail {
            url
          }
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
