import { useEffect, useState } from 'react'

type Props = { detikAwal: number }

export function TimerBelajar({ detikAwal }: Props) {
  const [sisa, setSisa] = useState(detikAwal)
  const [jalan, setJalan] = useState(false)

  useEffect(() => {
    if (!jalan) return
    const id = setInterval(() => setSisa((s) => Math.max(0, s - 1)), 1000)
    return () => clearInterval(id)
  }, [jalan])

  useEffect(() => {
    if (sisa === 0) setJalan(false)
  }, [sisa])

  useEffect(() => {
    const asli = document.title
    document.title = `Sisa: ${sisa} detik`
    return () => {
      document.title = asli
    }
  }, [sisa])

  return (
    <>
      <p>Sisa: {sisa} detik</p>
      {sisa === 0 && <p>Selesai!</p>}
      <button onClick={() => setJalan((j) => !j)} disabled={sisa === 0}>
        {jalan ? 'Jeda' : 'Mulai'}
      </button>
      <button
        onClick={() => {
          setSisa(detikAwal)
          setJalan(false)
        }}
      >
        Reset
      </button>
    </>
  )
}
