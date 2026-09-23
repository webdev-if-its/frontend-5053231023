// TODO(Level 1): beri tipe props yang benar — { onKlik: (e:
// React.MouseEvent<HTMLButtonElement>) => void }. Render sebuah <button>
// bertuliskan "Klik Saya" yang, SAAT DIKLIK (bukan saat render), memanggil
// onKlik dengan event klik-nya.
// Lihat SOAL.md untuk kontrak lengkap.
import type { MouseEvent } from 'react'

type Props = { onKlik: (e: MouseEvent<HTMLButtonElement>) => void }

export function TombolKlik({ onKlik }: Props) {
  return <button onClick={onKlik}>Klik Saya</button>
}
