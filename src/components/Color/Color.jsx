import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { LockAlt, LockOpenAlt } from '@styled-icons/boxicons-solid'
import Button from '../Button'
import IconButton from '../IconButton'
import Picker from '../Picker'
import useClipboard from '../../hooks/useClipboard'
import { useToast } from '../../context/toastContext'

const Color = ({ id, hex, isLocked, toggleLocked, setColor }) => {
  const [isCopied, copy] = useClipboard()
  const { showToast } = useToast()
  const [isPickerOpen, setPickerOpen] = useState(false)
  const triggerRef = useRef()

  useEffect(() => {
    if (isCopied) showToast('Color copied to the clipboard !')
  }, [isCopied])

  return (
    <Container>
      <ColorBox style={{ backgroundColor: hex }} onClick={() => setPickerOpen(true)} />

      <Content>
        <Button ref={triggerRef} onClick={() => copy(hex)}>
          {hex.replace('#', '')}
        </Button>

        <IconButton
          data-active={isLocked}
          aria-label={isLocked ? 'Unlock color' : 'Lock color'}
          onClick={() => toggleLocked(id)}
        >
          {isLocked ? <LockAlt size={14} /> : <LockOpenAlt size={14} />}
        </IconButton>
      </Content>

      <Picker
        isOpen={isPickerOpen}
        color={hex}
        onChange={(v) => setColor(id, v)}
        triggerRef={triggerRef}
        onClose={() => setPickerOpen(false)}
      />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
`

const ColorBox = styled.div`
  height: 12rem;
  cursor: pointer;

  @media (min-width: 768px) {
    height: 24rem;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding-block: 1rem;
`

export default Color
