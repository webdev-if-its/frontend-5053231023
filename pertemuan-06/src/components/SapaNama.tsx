import { useEffect, useState } from 'react'

export function SapaNama() {
  const [nama, setNama] = useState('')
  const [jumlah, setJumlah] = useState(0)

  useEffect(() => {
    document.title = nama ? `Halo, ${nama}` : 'Halo, Tamu'
  }, [nama])

  return (
    <>
      <label>
        Nama <input value={nama} onChange={(e) => setNama(e.target.value)} />
      </label>
      <button onClick={() => setJumlah((j) => j + 1)}>+1</button>
      <p>Klik: {jumlah}</p>
    </>
  )
}
