import styled from 'styled-components'

const Button = styled.button`
  padding: 1.5rem 3rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.neutral[900]};
  color: ${({ theme }) => theme.neutral[0]};
  font-size: 1.125rem;
  font-weight: 600;
  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.neutral[800]};
  }
`

export default Button
