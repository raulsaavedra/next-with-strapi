import { gql, useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

import { useForm } from 'react-hook-form';
import { SForm, SFormGroup } from '../../components/styles/base/Form';
import { Container } from '../../components/styles/base/Layout';
import client from '../../lib/client';
import {
  ButtonText,
  CardTitle,
  CardTitleSmall,
  HeadingPrimary,
  HeadingSecondary,
  Paragraph,
} from '../../components/styles/base/Typography';
import { SArticleImageContainer } from '../../components/styles/Article';
import { SButton } from '../../components/styles/Button';
import Comments from '../../components/Comments';

const ArticleWrapper = styled.div`
  margin: 4rem 0rem;
`;
const ContentWrapper = styled.div`
  margin: 4rem 0rem;
`;
const UPDATE_LIKES = gql`
  mutation UPDATE_LIKES($id: ID!) {
    increaseLikes(id: $id) {
      likes
    }
  }
`;
const CREATE_COMMENT = gql`
  mutation CREATE_COMMENT($article: ID!, $title: String!, $comment: String!) {
    createComment(
      input: { data: { article: $article, title: $title, comment: $comment } }
    ) {
      comment {
        title
        comment
      }
    }
  }
`;
export default function Article({ article, content }) {
  const [updateLikes, { loadingUpdateLikes }] = useMutation(UPDATE_LIKES, {
    variables: {
      id: article.id,
    },
  });
  const [createComment, { loading: loadingCreateComment }] = useMutation(
    CREATE_COMMENT,
    {
      variables: {
        article: 1,
        title: 'Hola',
        comment: 'Hola a todos',
      },
    }
  );
  const [likes, setLikes] = useState(article.likes);
  const handleUpdateLikes = async () => {
    await updateLikes();
    setLikes(likes + 1);
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <ArticleWrapper>
        <SArticleImageContainer marginBottom="5">
          <Image
            layout="fill"
            objectFit="cover"
            src={`${process.env.NEXT_PUBLIC_API_URL}${article.thumbnail[0].url}`}
          />
        </SArticleImageContainer>
        <HeadingPrimary marginBottom="3">{article.title}</HeadingPrimary>
        <Paragraph marginBottom="3">{article.description}</Paragraph>
        <SButton
          disabled={loadingUpdateLikes}
          onClick={() => handleUpdateLikes()}
        >
          <ButtonText fontWeight="bold">Likes: {likes || 0}</ButtonText>
        </SButton>
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
          id
          title
          description
          content
          likes
          comments {
            id
            title
            comment
          }
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
    revalidate: 20,
  };
}
