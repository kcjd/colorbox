import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Adjust, Copy, LockAlt, LockOpenAlt } from '@styled-icons/boxicons-solid'
import IconButton from '../IconButton'
import Picker from '../Picker'
import useClipboard from '../../hooks/useClipboard'
import { useToast } from '../../context/toastContext'

const Color = ({ id, hex, isLocked, toggleLocked, setNewColor }) => {
  const [isCopied, copy] = useClipboard()
  const { showToast } = useToast()
  const [isPickerOpen, setPickerOpen] = useState(false)
  const triggerRef = useRef()

  useEffect(() => {
    if (isCopied) showToast('Color copied to the clipboard !')
  }, [isCopied])

  return (
    <Container>
      <ColorBox color={hex} />

      <HexText>{hex.replace('#', '')}</HexText>

      <Controls>
        <IconButton
          data-active={isLocked}
          aria-label={isLocked ? 'Unlock color' : 'Lock color'}
          onClick={() => toggleLocked(id)}
        >
          {isLocked ? <LockAlt size={14} /> : <LockOpenAlt size={14} />}
        </IconButton>

        <IconButton ref={triggerRef} aria-label="Pick new color" onClick={() => setPickerOpen(true)}>
          <Adjust size={14} />
        </IconButton>

        <IconButton aria-label="Copy to clipboard" onClick={() => copy(hex)}>
          <Copy size={14} />
        </IconButton>
      </Controls>

      <Picker
        isOpen={isPickerOpen}
        color={hex}
        onChange={(v) => setNewColor(id, v)}
        triggerRef={triggerRef}
        onClose={() => setPickerOpen(false)}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ColorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 24rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: ${(props) => props.color};
`

const HexText = styled.span`
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-transform: uppercase;
`

const Controls = styled.div`
  display: flex;
  gap: 0.25rem;
`

export default Color
