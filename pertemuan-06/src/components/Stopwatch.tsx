import { useEffect, useState } from 'react'

export function Stopwatch() {
  const [detik, setDetik] = useState(0)
  const [jalan, setJalan] = useState(false)

  useEffect(() => {
    if (!jalan) return
    const id = setInterval(() => setDetik((d) => d + 1), 1000)
    return () => clearInterval(id)
  }, [jalan])

  return (
    <>
      <p>{detik} detik</p>
      <button onClick={() => setJalan((j) => !j)}>{jalan ? 'Stop' : 'Start'}</button>
    </>
  )
}
