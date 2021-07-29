import styled from 'styled-components';

import { color, typography, space } from 'styled-system';

export const HeadingPrimary = styled.h1`
  font-size: 5rem;
  line-height: 1.2;
  ${color}
  ${typography}
  ${space}
`;
export const HeadingSecondary = styled.h2`
  font-size: 4rem;
  line-height: 1.2;
  ${color}
  ${typography}
  ${space}
`;
export const HeadingTertiary = styled.h2`
  font-size: 3.5rem;
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
export const CardTitleSmall = styled.h4`
  font-size: 2.5rem;
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
export const ParagraphSmall = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  ${color}
  ${typography}
  ${space}
`;
export const LinkText = styled.a`
  font-size: 1.8rem;
  line-height: 1.5;
  transition: all 0.6s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.greenDark};
  }
  ${color}
  ${typography}
  ${space}
`;
export const ButtonText = styled.p`
  font-size: 1.8rem;
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
