import { useEffect, useState } from 'react'

export function LebarJendela() {
  const [lebar, setLebar] = useState(window.innerWidth)

  useEffect(() => {
    const perbarui = () => setLebar(window.innerWidth)
    window.addEventListener('resize', perbarui)
    return () => window.removeEventListener('resize', perbarui)
  }, [])

  return <p>Lebar jendela: {lebar}px</p>
}
