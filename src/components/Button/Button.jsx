import styled from 'styled-components'

const Button = styled.button`
  padding: 0.625rem 0.75rem;
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.neutral[900]};
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.neutral[100]};
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`

export default Button
