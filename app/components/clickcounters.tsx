'use client'
import { useState, useEffect } from 'react'

export default function ClickCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('/api/count').then(r => r.json()).then(d => setCount(d.count))
  }, [])

  const handleClick = async () => {
    const res = await fetch('/api/count', { method: 'POST' })
    const data = await res.json()
    setCount(data.count)
  }

  return (
    <button onClick={handleClick} className="px-4 py-2 bg-blue-600 text-white rounded">
      Clicked {count} times
    </button>
  )
}