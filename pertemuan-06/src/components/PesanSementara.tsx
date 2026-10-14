import { useEffect, useState } from 'react'

type Props = { pesan: string; durasi: number }

export function PesanSementara({ pesan, durasi }: Props) {
  const [tampil, setTampil] = useState(true)

  useEffect(() => {
    setTampil(true)
    const id = setTimeout(() => setTampil(false), durasi)
    return () => clearTimeout(id)
  }, [pesan, durasi])

  return tampil ? <p>{pesan}</p> : null
}
