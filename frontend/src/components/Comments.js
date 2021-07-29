import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import {
  CardTitle,
  CardTitleSmall,
  HeadingSecondary,
  ParagraphSmall,
} from './styles/base/Typography';

const SCommentListWrapper = styled.div`
  display: grid;
  gap: 1rem;
  color: white;
  ${space}
`;
const SCommentList = styled.div`
  display: grid;
  gap: 1rem;
`;
const SComment = styled.div`
  background: ${({ theme }) => theme.colors.blueLight};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  padding: 1rem 2rem;
  border-radius: 0.75rem;
`;

export default function Comments({ data, marginTop, marginBottom }) {
  return (
    <SCommentListWrapper marginTop={marginTop} marginBottom={marginBottom}>
      <HeadingSecondary color="blueLight" marginBottom="3">
        Comments 💬
      </HeadingSecondary>
      <SCommentList>
        {data.map((item) => (
          <SComment key={data.id}>
            <CardTitleSmall>{item.title}</CardTitleSmall>
            <ParagraphSmall>{item.comment}</ParagraphSmall>
          </SComment>
        ))}
      </SCommentList>
    </SCommentListWrapper>
  );
}
