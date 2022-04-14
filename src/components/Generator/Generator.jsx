import { useState } from 'react'
import randomColor from 'randomcolor'
import styled from 'styled-components'
import Color from '../Color'
import MainButton from '../MainButton'
import useKeyPress from '../../hooks/useKeyPress'

const initialState = randomColor({ count: 4 }).map((hex, id) => ({ id, hex, isLocked: false }))

const Generator = () => {
  const [colors, setColors] = useState(initialState)

  const generateColors = () => {
    setColors((prev) => prev.map((c) => (c.isLocked ? c : { ...c, hex: randomColor() })))
  }

  const toggleLocked = (id) => {
    setColors((prev) => prev.map((c) => (c.id === id ? { ...c, isLocked: !c.isLocked } : c)))
  }

  const setNewColor = (id, hex) => {
    setColors((prev) => prev.map((c) => (c.id === id ? { ...c, hex } : c)))
  }

  useKeyPress('g', generateColors)

  return (
    <Container>
      <Palette>
        {colors.map((c) => (
          <Color
            id={c.id}
            hex={c.hex}
            isLocked={c.isLocked}
            toggleLocked={toggleLocked}
            setNewColor={setNewColor}
            key={c.id}
          />
        ))}
      </Palette>

      <Controls>
        <MainButton onClick={generateColors}>Generate Random</MainButton>
        <HelpText>
          Or press <kbd>G</kbd> key
        </HelpText>
      </Controls>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: min(100% - 1rem, 60rem);
  margin-inline: auto;
`

const Palette = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 4rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.neutral[0]};
  overflow: hidden;
`

const Controls = styled.div`
  position: absolute;
  top: calc(100% - 2rem);
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

const HelpText = styled.p`
  color: ${({ theme }) => theme.neutral[600]};
  font-size: 0.875rem;

  @media (max-width: 1023px) {
    display: none;
  }
`

export default Generator
