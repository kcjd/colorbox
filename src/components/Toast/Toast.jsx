import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle } from '@styled-icons/boxicons-solid'
import { useToast } from '../../context/toastContext'

const toastRoot = document.querySelector('#toast-root')

const toastVariants = {
  hidden: {
    opacity: 0,
    y: 64,
    scale: 0.3
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1
  }
}

const Toast = ({ message }) => {
  const { toast } = useToast()

  return createPortal(
    <Container>
      <AnimatePresence>
        {toast && (
          <MotionToast
            variants={toastVariants}
            initial="hidden"
            animate="visible"
            transition={{ type: 'spring', duration: 0.4 }}
            exit="hidden"
            role="alert"
          >
            <CheckCircle size={24} />

            {toast}
          </MotionToast>
        )}
      </AnimatePresence>
    </Container>,
    toastRoot
  )
}

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 1rem;
  display: flex;
  justify-content: center;
  pointer-events: none;
`

const StyledToast = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  height: 3rem;
  padding-inline: 1.5rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.neutral[900]};
  color: ${({ theme }) => theme.neutral[0]};
`

const MotionToast = motion(StyledToast)

export default Toast
