import styled from 'styled-components';
import media from 'styled-media-query';

export const SArticleImaeContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 55vh;
  margin-bottom: 2rem;
  border-radius: 2.5rem;
  overflow: hidden;
  transition: all 0.4s ease;
  position: relative;
  ${media.lessThan('large')`
    width: 100%;
    height: 45vh;
  `};
  img {
    width: 100%;
    border-radius: 2.5rem;
    transition: all 0.4s ease;
  }
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.normal};
    img {
      transform: scale(1.1);
      transform-origin: 50% 50%;
    }
  }
`;
