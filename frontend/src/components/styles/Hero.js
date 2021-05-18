import styled from 'styled-components';
import media from 'styled-media-query';

import { space } from 'styled-system';

export const SHero = styled.div`
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
