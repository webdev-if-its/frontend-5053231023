// TODO(Level 6): beri tipe props yang benar — { status: Status } (impor
// `Status` dari '../types', jangan tulis ulang union-nya di sini). Lalu
// render teks berbeda sesuai status: pending -> "Menunggu", selesai ->

import type { Status } from "../types";

// "Selesai", batal -> "Dibatalkan". Lihat SOAL.md untuk kontrak lengkap.
export function StatusPesanan(props: { status: Status }) {
  return <p>{props.status === 'pending' ? 'Menunggu' : props.status === 'selesai' ? 'Selesai' : 'Dibatalkan'}</p>
}
