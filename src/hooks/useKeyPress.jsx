import { useEffect } from 'react'

const useKeyPress = (key, handler) => {
  useEffect(() => {
    const listener = (e) => {
      if (e.key !== key) return

      handler()
    }

    window.addEventListener('keydown', listener)

    return () => window.removeEventListener('keydown', listener)
  }, [key, handler])
}

export default useKeyPress
