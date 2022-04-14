import styled from 'styled-components'

const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.neutral[500]};
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover,
  &:focus-visible,
  &[data-active='true'] {
    color: ${({ theme }) => theme.neutral[700]};
    background-color: ${({ theme }) => theme.neutral[100]};
  }
`

export default IconButton
