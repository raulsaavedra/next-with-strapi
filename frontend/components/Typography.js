import styled from 'styled-components';

import { color, typography, space } from 'styled-system';

export const HeadingPrimary = styled.h1`
  font-size: 5rem;
  line-height: 1.2;
  ${color}
  ${typography}
  ${space}
`;
export const CardTitle = styled.h4`
  font-size: 3rem;
  line-height: 1.2;
  ${color}
  ${typography}
  ${space}
`;
export const Paragraph = styled.p`
  font-size: 2rem;
  line-height: 1.5;
  ${color}
  ${typography}
  ${space}
`;

export const Span = styled.span`
  ${color}
  ${typography}
  ${space}
  ${HeadingPrimary}:hover & {
    color: ${({ theme }) => theme.colors.greenDark};
  }
  transition: all 0.4s ease;
`;
