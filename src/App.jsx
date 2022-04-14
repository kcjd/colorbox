import styled, { ThemeProvider } from 'styled-components'
import Generator from './components/Generator'
import GlobalStyle from './components/GlobalStyle'
import Toast from './components/Toast/Toast'
import theme from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Container>
        <Generator />
      </Container>

      <Toast />
    </ThemeProvider>
  )
}

const Container = styled.main`
  display: flex;
  align-items: center;
  min-height: 100vh;
`

export default App
