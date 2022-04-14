import { useLayoutEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'
import { HexColorPicker } from 'react-colorful'
import { offset, shift, useFloating } from '@floating-ui/react-dom'
import useClickOutside from '../../hooks/useClickOutside'

const pickerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6
  },
  visible: {
    opacity: 1,
    scale: 1
  }
}

const Picker = ({ isOpen, color, onChange, triggerRef, onClose }) => {
  const { x, y, reference, floating, strategy, refs } = useFloating({
    placement: 'top',
    middleware: [offset(8), shift()]
  })

  useLayoutEffect(() => {
    reference(triggerRef.current)
  }, [triggerRef.current])

  useClickOutside(refs.floating, onClose)

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionPopover
          variants={pickerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ type: 'spring', duration: 0.4 }}
          ref={floating}
          style={{
            position: strategy,
            top: y ?? '',
            left: x ?? ''
          }}
        >
          <HexColorPicker color={color} onChange={onChange} />
        </MotionPopover>
      )}
    </AnimatePresence>
  )
}

const Popover = styled.div`
  z-index: 100;
  padding: 0.5rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.neutral[300]};
  background-color: ${({ theme }) => theme.neutral[0]};
`

const MotionPopover = motion(Popover)

export default Picker
