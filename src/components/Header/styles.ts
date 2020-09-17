import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-title-white);
  clip-path: polygon(0 0%, 100% 0, 100% 80%, 0 100%);
  height: 50rem;

  @media (min-width: 1100px) {
    height: 48rem;
  }
`;
