import { useEffect } from 'react'

type Props = { judul: string }

export function JudulHalaman({ judul }: Props) {
  useEffect(() => {
    document.title = judul
  }, [judul])
  return <h1>{judul}</h1>
}
