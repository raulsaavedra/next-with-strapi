import styled from 'styled-components';
import media from 'styled-media-query';

import { space } from 'styled-system';

export const SCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(34rem, 100%), 1fr));
  align-items: flex-start;
  gap: 4rem;
`;

export const SCard = styled.div`
  display: grid;
  gap: 1rem;
  cursor: pointer;
`;
export const SCardImage = styled.div`
  width: 100%;
  height: 27vh;
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
  ${SCard}:hover & {
    box-shadow: ${({ theme }) => theme.boxShadow.normal};
    img {
      transform: scale(1.1);
      transform-origin: 50% 50%;
    }
  }
`;
