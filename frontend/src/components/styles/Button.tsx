import styled from 'styled-components';
import { margin } from './base/Utilities';

export const SButton = styled.button`
  background: ${({ theme }) => theme.colors.blueLight};
  border: 3px solid transparent;
  color: white;
  padding: 1rem 2rem;
  border-radius: 1.25rem;
  position: relative;
  transition: all 0.4s ease;

  ${margin}

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: ${({ theme }) => theme.boxShadow.buttonBlue};
    transition: all 0.8s ease;
    opacity: 0;
  }
  &:focus {
    border: 3px solid ${({ theme }) => theme.colors.blueDark};
  }
  &:focus,
  &:hover {
    background: ${({ theme }) => theme.colors.greenDark};
    &::before {
      opacity: 1;
    }
  }
  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`;
