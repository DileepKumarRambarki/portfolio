import React, { useEffect, useState } from "react"

const TypingText = ({ texts, speed = 120, pause = 1500 }) => {
  const [index, setIndex] = useState(0)         // current string index
  const [subIndex, setSubIndex] = useState(0)   // character position
  const [forward, setForward] = useState(true)  // typing or deleting
  const [blink, setBlink] = useState(true)      // cursor blinking

  useEffect(() => {
    if (index === texts.length) return

    const timeout = setTimeout(() => {
      setSubIndex(prev => {
        if (forward) {
          if (prev < texts[index].length) return prev + 1
          setForward(false)
          return prev
        } else {
          if (prev > 0) return prev - 1
          setForward(true)
          setIndex((prevIndex) => (prevIndex + 1) % texts.length)
          return prev
        }
      })
    }, forward ? speed : speed / 2)

    return () => clearTimeout(timeout)
  }, [subIndex, index, forward, texts, speed])

  // Cursor blink
  useEffect(() => {
    const cursor = setInterval(() => {
      setBlink(prev => !prev)
    }, 500)
    return () => clearInterval(cursor)
  }, [])

  return (
    <span>
      {texts[index].substring(0, subIndex)}
      <span style={{ opacity: blink ? 1 : 0 }}>|</span>
    </span>
  )
}

export default TypingText
