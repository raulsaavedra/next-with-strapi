import styled from 'styled-components';
import { space } from 'styled-system';

export const SForm = styled.form`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  input {
    width: 100%;
    padding: 1rem 2rem;
    border: 2px solid ${({ theme }) => theme.colors.grayPrimary};
    transition: all 0.4s ease;
    border-radius: 0.5rem;
    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.blueLight};
      box-shadow: ${({ theme }) => theme.boxShadow.light};
      outline: 0;
    }
  }
  ${space}
`;

export const SFormGroup = styled.div`
  display: grid;
  gap: 0.5rem;
`;
