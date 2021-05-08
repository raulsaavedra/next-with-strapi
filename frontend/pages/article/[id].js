import { gql } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/Container';
import client from '../../src/client';

export default function Article({ article }) {
  return (
    <Container>
      <div>{article.title}</div>
      <div>{article.description}</div>
    </Container>
  );
}

export async function getServerSideProps({ query }) {
  console.log(query.id);
  const { data } = await client.query({
    variables: {
      id: query.id,
    },
    query: gql`
      query($id: ID!) {
        article(id: $id) {
          title
          description
        }
      }
    `,
  });

  return {
    props: {
      article: data.article,
    },
  };
}
