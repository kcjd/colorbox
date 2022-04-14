import { useEffect, useState } from 'react'

const useClipboard = () => {
  const [isCopied, setCopied] = useState(false)

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
    } catch (err) {
      setCopied(false)
    }
  }

  useEffect(() => {
    if (!isCopied) return

    const timer = setTimeout(() => setCopied(false), 150)

    return () => clearTimeout(timer)
  }, [isCopied])

  return [isCopied, copy]
}

export default useClipboard
