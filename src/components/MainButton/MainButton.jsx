import styled from 'styled-components'

const MainButton = styled.button`
  padding: 1.5rem 3rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.neutral[900]};
  color: ${({ theme }) => theme.neutral[0]};
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.neutral[800]};
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`

export default MainButton
