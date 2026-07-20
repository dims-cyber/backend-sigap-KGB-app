<p align="center">
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

# 🚀 Backend SIM Kepegawaian Diskominfo Kota Makassar

## 📌 Tentang Project

**SIM Kepegawaian (Sistem Informasi Manajemen Kepegawaian)** merupakan aplikasi berbasis web yang digunakan untuk membantu pengelolaan data kepegawaian pada **Dinas Komunikasi dan Informatika Kota Makassar**.

Backend aplikasi ini dibangun menggunakan teknologi:

- **NestJS** sebagai framework backend
- **Prisma ORM** sebagai database management
- **MySQL** sebagai database
- **JWT Authentication** untuk sistem keamanan login
- **Modular Architecture** untuk struktur kode yang lebih mudah dikembangkan

Tujuan utama sistem ini adalah menyediakan layanan pengelolaan data pegawai secara digital agar proses administrasi kepegawaian menjadi lebih efektif, terstruktur, dan mudah diakses.

---

# 🎯 Fitur Utama

Beberapa fitur utama yang tersedia pada sistem:
## 👨‍💼 Manajemen Pegawai

Mengelola informasi data pegawai.

Fitur:
- Menampilkan data pegawai
- Menambahkan data pegawai
- Mengubah data pegawai
- Menghapus data pegawai
- Melihat detail informasi pegawai

Data pegawai meliputi:
- Nama lengkap
- NIP
- NIK
- Jabatan
- Pangkat/Golongan
- Unit kerja
- Status kepegawaian
- Informasi lainnya

---

## 🏢 Manajemen Unit Kerja

Mengelola data struktur organisasi.

Fitur:
- Data bidang
- Data bagian
- Data jabatan
- Relasi pegawai dengan unit kerja

---

## 📂 Manajemen Dokumen Kepegawaian

Mengelola dokumen pendukung pegawai.

Contoh dokumen:
- SK Pengangkatan
- SK Pangkat
- Sertifikat
- Dokumen pendukung lainnya

---

# 📁 Struktur Folder

Project menggunakan konsep **Modular Architecture** pada NestJS.
