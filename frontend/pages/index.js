import { gql } from '@apollo/client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import media from 'styled-media-query';
import client from '../src/client';
import {
  CardTitle,
  HeadingPrimary,
  Paragraph,
  Span,
} from '../components/Typography';
import { Container } from '../components/Container';

const Hero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  > * {
    grid-column: 2;
  }
  margin-top: 4rem;
  margin-bottom: 6rem;

  ${media.lessThan('large')`
   grid-template-columns: 1fr;
  `}
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(34rem, 100%), 1fr));
  gap: 4rem;
`;
const Card = styled.div`
  display: grid;
  gap: 1rem;
  cursor: pointer;
`;
const CardImage = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 2rem;
  img {
    border-radius: 2rem;
    width: 100%;
  }
`;
export default function Home({ articles }) {
  console.log(articles);
  return (
    <Container>
      <Hero>
        <HeadingPrimary
          color="primary"
          fontWeight="700"
          textAlign="center"
          marginBottom="3"
        >
          The Next with <Span color="secondary">Strapi Blog</Span>
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
