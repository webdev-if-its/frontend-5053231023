// TODO(Level 4): beri tipe props yang benar — { onLogin: (email: string) =>
// void }. Render <form> berisi input berlabel "Email" dan tombol submit
// "Masuk". Saat form dikirim: cegah reload halaman (e.preventDefault()),
// lalu panggil onLogin dengan isi email.
// Lihat SOAL.md untuk kontrak lengkap.
import { useState, type FormEvent } from 'react'

type Props = { onLogin: (email: string) => void }

export function FormLogin({ onLogin }: Props) {
  const [email, setEmail] = useState('')
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onLogin(email)
  }
  return (
    <form onSubmit={submit}>
      <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
      <button type="submit">Masuk</button>
    </form>
  )
}
