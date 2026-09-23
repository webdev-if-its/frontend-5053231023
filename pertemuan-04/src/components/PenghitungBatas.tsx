// TODO(Level 6): beri tipe props yang benar — { min: number; max: number }.
// Angka dimulai dari min, ditampilkan sebagai "Nilai: {angka}", dengan tombol
// "+" dan "-". Tombol "+" harus disabled saat angka sudah = max, tombol "-"
// harus disabled saat angka sudah = min.
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from 'react'

type Props = { min: number; max: number }

export function PenghitungBatas({ min, max }: Props) {
  const [angka, setAngka] = useState(min)
  return <>
    <p>Nilai: {angka}</p>
    <button disabled={angka === max} onClick={() => setAngka((nilai) => nilai + 1)}>+</button>
    <button disabled={angka === min} onClick={() => setAngka((nilai) => nilai - 1)}>-</button>
  </>
}
