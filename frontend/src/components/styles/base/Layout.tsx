import styled from 'styled-components';

import { margin } from './Utilities';

export const fullBleed = styled.div``;
export const Container = styled.div`
  display: grid;
  grid-template-columns:
    1fr
    min(128rem, calc(100% - 64px))
    1fr;
  > * {
    grid-column: 2;
  }
  padding: 0rem 2rem;
  ${fullBleed} {
    width: 100%;
    grid-column: 1 / 4;
  }
  ${margin}
`;

export const Centered = styled.div`
  display: grid;
  justify-content: center;
  ${margin}
`;
