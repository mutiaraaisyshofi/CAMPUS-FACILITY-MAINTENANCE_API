CAMPUS FACILITY MAINTENANCE MANAGEMENT API
(Sistem Pelaporan dan Penanganan Kerusakan Fasilitas Kampus)

// DEKSRIPSI
Campus Facility Maintenance Management API adalah sebuah sistem backend untuk pengelolaan pelaporan dan penanganan kerusakan fasilitas kampus secara terstruktur dan berbasis role. Sistem ini dirancang untuk mempermudah proses monitoring, pelaporan, serta tindak lanjut perbaikan fasilitas kampus agar lebih efisien, transparan, dan terdokumentasi dengan baik.

Dalam sistem ini terdapat tiga jenis pengguna (role), yaitu student, staff, dan admin, yang masing-masing memiliki hak akses dan tanggung jawab berbeda. Student dapat melakukan registrasi, login, melihat daftar fasilitas kampus, serta membuat laporan kerusakan yang akan tersimpan dengan status awal pending. Staff bertugas untuk memproses laporan yang masuk dengan mengubah status menjadi in progress, melakukan tindakan perbaikan, serta menambahkan catatan perbaikan hingga laporan dinyatakan completed. Sementara itu, admin memiliki kontrol penuh untuk mengelola data master seperti kategori fasilitas, data fasilitas kampus, serta akun staff.

Alur kerja sistem dimulai dari student yang membuat laporan kerusakan fasilitas. Laporan tersebut kemudian diproses oleh staff melalui beberapa tahap status hingga selesai diperbaiki. Seluruh proses perbaikan dicatat dalam maintenance log untuk memastikan setiap tindakan terdokumentasi dengan jelas. Sistem ini juga mendukung relasi antar data seperti users, facilities, reports, categories, dan maintenance_logs untuk menjaga integritas dan keterkaitan informasi.

Dengan arsitektur ini, API mendukung pengelolaan data fasilitas kampus yang lebih rapi, terpusat, dan mudah dikembangkan lebih lanjut sebagai sistem manajemen fasilitas berskala lebih besar.

// TECH STACK
Node.js
Express.js
Prisma ORM
MySQL
JWT Authentication

// LOCAL SETUP
1. Clone repository
```bash
git https://github.com/mutiaraaisyshofi/CAMPUS-FACILITY-MAINTENANCE_API.git
cd CAMPUS-FACILITY-MAINTENANCE_API



