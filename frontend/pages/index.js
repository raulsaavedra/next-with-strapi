import { gql, useMutation } from '@apollo/client';
import Link from 'next/link';

import Image from 'next/image';
import client from '../src/client';
import {
  CardTitle,
  HeadingPrimary,
  Paragraph,
  Span,
} from '../components/Typography';
import { Container } from '../components/styles/Container';
import {
  SCard,
  SCardImage,
  SCardList,
  SHero,
} from '../components/styles/General';

export default function Home({ articles }) {
  return (
    <Container>
      <SHero>
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
      </SHero>
      <SCardList>
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/article/${article.slug}`}
            locale={article.locale}
          >
            <SCard>
              <SCardImage>
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={`${process.env.NEXT_PUBLIC_API_URL}${article.thumbnail[0].url}`}
                />
              </SCardImage>
              <CardTitle color="black">{article.title}</CardTitle>
              <Paragraph color="grayPrimary">{article.description}</Paragraph>
            </SCard>
          </Link>
        ))}
      </SCardList>
    </Container>
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
          slug
          description
          thumbnail {
            url
          }
          locale
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
