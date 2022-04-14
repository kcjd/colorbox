import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.neutral[900]};
    outline-offset: 2px;
  }

  button {
    border: 0;
    background-color: transparent;
    font: inherit;
    cursor: pointer;
  }

  kbd {
    font: inherit;

    &::before,
    &::after {
      content: '\\0027';
    }
  }

  body {
    background-color: ${({ theme }) => theme.neutral[100]};
    color: ${({ theme }) => theme.neutral[900]};
    font-family: 'Inter', sans-serif;
  }
`

export default GlobalStyle
