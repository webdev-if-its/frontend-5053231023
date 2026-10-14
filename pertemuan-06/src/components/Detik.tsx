import { useEffect, useState } from 'react'

export function Detik() {
  const [n, setN] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setN((d) => d + 1), 1000)
    return () => clearInterval(id)
  }, [])

  return <p>Detik: {n}</p>
}
