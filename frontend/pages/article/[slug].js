import { gql } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

import { Container } from '../../components/styles/Container';
import client from '../../src/client';
import { HeadingPrimary, Paragraph } from '../../components/Typography';
import { ArticleImageContainer } from '../../components/styles/General';

const ArticleWrapper = styled.div`
  margin: 4rem 0rem;
`;
const ContentWrapper = styled.div`
  margin: 4rem 0rem;
`;
export default function Article({ article, content }) {
  return (
    <Container>
      <ArticleWrapper>
        <ArticleImageContainer marginBottom="5">
          <Image
            layout="fill"
            objectFit="cover"
            src={`${process.env.NEXT_PUBLIC_API_URL}${article.thumbnail[0].url}`}
          />
        </ArticleImageContainer>
        <HeadingPrimary marginBottom="3">{article.title}</HeadingPrimary>
        <Paragraph>{article.description}</Paragraph>
        <ContentWrapper>
          <MDXRemote {...content} />
        </ContentWrapper>
      </ArticleWrapper>
    </Container>
  );
}

export async function getStaticPaths({ locales }) {
  // Call an external API endpoint to get posts

  const resultsPerLocale = await Promise.all(
    locales.map(async (locale) => {
      const { data } = await client.query({
        variables: {
          locale,
        },
        query: gql`
          query($locale: String!) {
            articles(locale: $locale) {
              slug
              locale
            }
          }
        `,
      });

      // Get the paths we want to pre-render based on posts
      const paths = data.articles.map((item) => ({
        params: { slug: item.slug },
        locale: item.locale,
      }));
      return paths;
    })
  );
  const results = resultsPerLocale.reduce(function (arr, e) {
    return arr.concat(e);
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths: results, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    variables: {
      slug: params.slug,
    },
    query: gql`
      query($slug: String!) {
        articleBySlug(slug: $slug) {
          title
          description
          content
          thumbnail {
            url
          }
          slug
        }
      }
    `,
  });

  const mdxSource = await serialize(data.articleBySlug.content);
  return {
    props: {
      article: data.articleBySlug,
      content: mdxSource,
    },
  };
}
