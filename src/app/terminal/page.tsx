'use client'

import { useRef, useState } from 'react'
import Terminal from '@/components/terminal/Terminal'

export default function Page() {
  const [position, setPosition] = useState({ x: 100, y: 100 })

  const dragging = useRef(false)
  const offset = useRef({ x: 0, y: 0 })

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true

    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
  }

  const onPointerMove = (e: PointerEvent) => {
    if (!dragging.current) return

    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    })
  }

  const onPointerUp = () => {
    dragging.current = false
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerup', onPointerUp)
  }

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        className="absolute w-225 h-125"
      >
        <div className="h-[calc(100%-40px)]" onPointerDown={onPointerDown}>
          <Terminal />
        </div>
      </div>
    </div>
  )
}