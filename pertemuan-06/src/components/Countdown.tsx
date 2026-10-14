import { useEffect, useState } from 'react'

type Props = { detikAwal: number; onSelesai: () => void }

export function Countdown({ detikAwal, onSelesai }: Props) {
  const [sisa, setSisa] = useState(detikAwal)

  useEffect(() => {
    if (sisa === 0) {
      onSelesai()
      return
    }
    const id = setInterval(() => setSisa((s) => s - 1), 1000)
    return () => clearInterval(id)
  }, [sisa])

  return <p>Sisa: {sisa}</p>
}
