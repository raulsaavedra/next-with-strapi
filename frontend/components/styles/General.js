import styled from 'styled-components';
import media from 'styled-media-query';

import { space } from 'styled-system';

export const Hero = styled.div`
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

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(34rem, 100%), 1fr));
  gap: 4rem;
`;
export const Card = styled.div`
  display: grid;
  gap: 1rem;
  cursor: pointer;
`;
export const CardImage = styled.div`
  width: 100%;
  height: 27.5rem;
  margin-bottom: 2rem;
  border-radius: 2.5rem;
  overflow: hidden;
  transition: all 0.4s ease;
  position: relative;
  img {
    width: 100%;
    border-radius: 2.5rem;
    transition: all 0.4s ease;
  }
  ${Card}:hover & {
    box-shadow: ${({ theme }) => theme.boxShadow.normal};
    img {
      transform: scale(1.1);
      transform-origin: 50% 50%;
    }
  }
`;

export const ArticleImageContainer = styled.div`
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
  ${space}
`;
