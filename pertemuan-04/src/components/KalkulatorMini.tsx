// TODO(Level 8): komponen TANPA props. Render dua input angka berlabel
// "Angka A" dan "Angka B" (type="number") dan teks "Hasil: {A + B}".
// Ingat: e.target.value SELALU string — ubah ke number sebelum dijumlahkan,
// dan input kosong dianggap 0.
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from 'react'

export function KalkulatorMini() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  return <>
    <label>Angka A<input type="number" value={a || ''} onChange={(e) => setA(Number(e.target.value))} /></label>
    <label>Angka B<input type="number" value={b || ''} onChange={(e) => setB(Number(e.target.value))} /></label>
    <p>Hasil: {a + b}</p>
  </>
}
