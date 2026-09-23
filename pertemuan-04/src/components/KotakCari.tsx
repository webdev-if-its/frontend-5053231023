// TODO(Level 3): beri tipe props yang benar — { onCari: (kata: string) =>
// void }. Render sebuah <input> yang memanggil onCari(isi input saat ini)
// HANYA ketika tombol Enter ditekan (onKeyDown + e.key) — tombol lain tidak
// boleh memicu onCari.
// Lihat SOAL.md untuk kontrak lengkap.
import { useState, type KeyboardEvent } from 'react'

type Props = { onCari: (kata: string) => void }

export function KotakCari({ onCari }: Props) {
  const [kata, setKata] = useState('')
  const tekan = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onCari(kata)
  }
  return <input value={kata} onChange={(e) => setKata(e.target.value)} onKeyDown={tekan} />
}
