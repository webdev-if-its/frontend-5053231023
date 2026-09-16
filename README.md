# frontend-nrp

Repo tugas mata kuliah **Frontend**, dibuat dari template [`webdev-if-its/frontend-template`](https://github.com/webdev-if-its/frontend-template). Ganti judul di atas jadi nama repo kalian sendiri (`frontend-nrp`, contoh: `frontend-5025201012`).

## Aturan Umum

- Tugas tiap pertemuan disimpan di folder `pertemuan-XX/` pada repo ini — masing-masing adalah project Vite + React + TypeScript sendiri (`npm install` terpisah per folder).
- Commit message wajib menyebut level yang dicapai: `pertemuan-XX: level N selesai`.
- Deadline push: sebelum pertemuan berikutnya dimulai.
- Semua level dicek otomatis lewat `npm run levels` (Vitest) — baca `pertemuan-XX/SOAL.md` tiap minggu untuk detail levelnya.

## Mengambil Pertemuan Baru Tiap Minggu

Repo ini **tidak otomatis sinkron** dengan template dosen. Begitu ada pertemuan baru, jalankan (ganti `pertemuan-02` sesuai minggu berjalan):

```bash
git fetch https://github.com/webdev-if-its/frontend-template.git main
git checkout FETCH_HEAD -- pertemuan-02
```

Perintah ini **aman dijalankan kapan pun** — tidak akan menimpa folder pertemuan lain yang sudah kalian kerjakan, karena hanya mengambil folder yang disebutkan. Setelah itu, `cd pertemuan-02 && npm install`, lalu commit folder barunya seperti biasa.

Kalau dosen memperbaiki sesuatu di pertemuan yang sudah dirilis (mis. ada bug di test), biasanya cukup ambil ulang file yang diperbaiki saja, bukan seluruh folder — akan diumumkan file mana yang berubah.

---

Bagian di bawah ini **isi bertahap** sesuai level yang sedang kalian kerjakan (lihat `pertemuan-XX/SOAL.md`) — heading-nya dicek otomatis, jangan diganti namanya.

## Struktur Project
index.html memuat main.tsx dan sebagai tempat untuk react ditampilkan
main.tsx mengimpor css dan komponen App, mengambil elemen html dengan id root lalu merender App/> ke elemen terseut
App.tsx berufungsi memangil function dari identitas.ts, isi halaman, memberikan judul paragraf dan hasil fucnrtion dalam jsx

## Identitas
- Nama: Aqsha Fadhli Azhim
- NRP: 5053231023
- Kelas: Pengembangan Frontend Dasar

## Commit vs Push
Commit adalah seperti checkpoint dinatara perubahan perubahan kecil yang kita buat dalam project dan bersifat lokal jika belum dilakukan push, jadi push adalah tahap pengumpulan dari banyaknya commit yang kita lakukan dan dapat di simpan di github

## JSX vs TSX
JSX dipakai utk menulis struktur UI di JS, TSX adalah supperset JSX

## Kenapa Union Type untuk Status
Union type lebih baik daripada string biasa karena hanya mengizinkan nilai status yang sudah ditentukan, yaitu pending, selesai, atau batal

## Refleksi
JSX/TSX membuat saya dapat menggabungkan struktur tampilan dengan logika komponen dalam satu file yang berbeda dari HTML biasa, JSX mendukung props, children, ekspresi JavaScript, dan pengecekan tipe dari TypeScript

## Refleksi Pertemuan 3
Conditional renderingmengubah cara menampilkan sebuah data daripada hanya menyembunyikan nya, dan juga tailwind berekaj sangat efesien menurut syaa jauh lebih mudah dibaca dibanding css biasa