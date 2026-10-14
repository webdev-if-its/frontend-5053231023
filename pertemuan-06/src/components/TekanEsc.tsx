import { useEffect } from 'react'

type Props = { onEsc: () => void }

export function TekanEsc({ onEsc }: Props) {
  useEffect(() => {
    const tekan = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onEsc()
    }
    document.addEventListener('keydown', tekan)
    return () => document.removeEventListener('keydown', tekan)
  }, [onEsc])

  return <p>Tekan Esc untuk menutup</p>
}
