import { useEffect, useState } from 'react'

export function CatatanKecil() {
  const [teks, setTeks] = useState(() => localStorage.getItem('catatan') ?? '')

  useEffect(() => {
    localStorage.setItem('catatan', teks)
  }, [teks])

  return (
    <label>
      Catatan
      <textarea value={teks} onChange={(e) => setTeks(e.target.value)} />
    </label>
  )
}
