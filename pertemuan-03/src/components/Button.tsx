// TODO(Level 7): beri tipe props yang benar — { variant: 'primary' |
// 'secondary' | 'danger'; children: ReactNode; onClick?: () => void }.
// Render sebuah <button> yang:
// - memuat children di dalamnya,
// - memanggil onClick saat diklik (kalau diberikan),
// - className-nya BERBEDA untuk tiap nilai variant (pakai Tailwind, mis.
//   warna latar berbeda per variant) — ini komponen REUSABLE: satu
//   komponen, tiga tampilan, diatur lewat props.
// Lihat SOAL.md untuk kontrak lengkap.
import type { ReactNode } from "react";

export function Button(props: {variant: 'primary' | 'secondary' | 'danger'; children: ReactNode; onClick?: () => void}) {

  const baseclass = 'px-4 py-2 rounded text-white font-bold'

  const variants = {
    primary: 'bg-blue-300 hover:bg-blue-700',
    secondary: 'bg-gray-300 hover:bg-gray-700',
    danger: 'bg-red-300 hover:bg-red-700'
  }

  const className = `${baseclass} ${variants[props.variant]}`

  return <button className={className} onClick={props.onClick}>{props.children}</button>
}