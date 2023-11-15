# MIT - Test Backend Dev

## Soal 1 (printPattern)

```
1 2 3 4 5
2 4 6 8 10
3 6 9 12 15
4 8 12 16 20
5 10 15 20 25
```

Fungsi `printPattern` adalah sebuah fungsi JavaScript yang mencetak sebuah pola angka. Pola yang dicetak adalah tabel perkalian dimana baris dan kolom dimulai dari 1 hingga 5.

### Cara Penggunaan

1. pastikan Anda telah menginstal Node.js pada sistem Anda.

2. Jalankan command `cd pattern/` di root project untuk pindah ke soal no. 1.

3. Jalankan command ini:

   ```
   node pattern.js
   ```

4. Fungsi akan mencetak pola angka berikut ke konsol:
   ```
   1 2 3 4 5
   2 4 6 8 10
   3 6 9 12 15
   4 8 12 16 20
   5 10 15 20 25
   ```

## Soal 2 (Wedding Guestbook Application)

Aplikasi Buku Tamu Pernikahan ini adalah sistem backend yang memungkinkan tamu untuk menambahkan data diri mereka ke daftar tamu dan memberikan catatan. Aplikasi ini juga menyediakan antarmuka administratif untuk mengelola data tersebut.

### Fitur

- **Guest Form**: Memungkinkan tamu untuk menambahkan nama, alamat, nomor telepon, dan catatan.
- **Note Gallery**: Menampilkan semua catatan dari tamu.
- **Autentikasi**: Proses login dan logout untuk admin menggunakan JWT.
- **Admin Interface**: Memungkinkan admin untuk mengelola semua data tamu.

### Teknologi yang Digunakan

- Node.js
- Express.js
- SQLite
- JWT untuk autentikasi
- Bcrypt untuk hash password
- ENV sebagai variabel lingkungan (penyimpan kode rahasia)

### Persiapan Lingkungan

Sebelum menjalankan aplikasi, pastikan Anda telah menginstal Node.js dan npm pada sistem Anda. Selain itu, Anda akan memerlukan SQLite untuk pengelolaan database.

### Instalasi

Untuk menginstal aplikasi, ikuti langkah-langkah berikut:

1. Clone repository:
   ```
   git clone https://github.com/fatah-illah/MIT---Test-Backend-Dev.git
   ```
2. Install dependensi NPM:
   ```
   npm install
   ```
3. Siapkan database:
   ```
   node database/init-db.js
   ```

### Penggunaan

Untuk menjalankan server:

```
npm start
```

Server akan berjalan pada http://localhost:3000.

### API Endpoints

#### Guest

- **Tambah Tamu**: `POST /guest/add`
- **Lihat Catatan**: `GET /guest/notes`

#### Admin

- **Login**: `POST /admin/login`
- **Manajemen Data**: `GET /admin/manage`
