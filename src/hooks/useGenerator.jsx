import { useCallback, useEffect, useState } from 'react'
import { toHex } from 'color2k'

const MIN_H = 0
const MAX_H = 360

const MIN_S = 20
const MAX_S = 80

const MIN_L = 20
const MAX_L = 80

const MIN_R = 10
const MAX_R = 60

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generateColor = (color) => ({
  h: color ? color.h + getRandomNum(MIN_R, MAX_R) : getRandomNum(MIN_H, MAX_H),
  s: getRandomNum(MIN_S, MAX_S),
  l: getRandomNum(MIN_L, MAX_L)
})

const generatePalette = (length = 4) => {
  const palette = []

  for (let i = 0; i < length; i++) {
    const prevColor = palette[i - 1]
    const newColor = generateColor(prevColor)

    palette.push(newColor)
  }

  return palette.map((color) => toHex(`hsl(${color.h}, ${color.s}%, ${color.l}%)`))
}

const useGenerator = () => {
  const [palette, setPalette] = useState([])

  const generate = useCallback(() => {
    const colors = generatePalette()

    setPalette((prev) =>
      colors.map((c, i) => ({
        id: i,
        hex: prev[i]?.isLocked ? prev[i].hex : c,
        isLocked: prev[i]?.isLocked || false
      }))
    )
  }, [])

  const toggleLocked = useCallback((id) => {
    setPalette((prev) => prev.map((c) => (c.id === id ? { ...c, isLocked: !c.isLocked } : c)))
  }, [])

  const setColor = useCallback((id, hex) => {
    setPalette((prev) => prev.map((c) => (c.id === id ? { ...c, hex } : c)))
  }, [])

  useEffect(() => {
    generate()
  }, [])

  return { palette, generate, toggleLocked, setColor }
}

export default useGenerator
