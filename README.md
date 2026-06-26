CAMPUS FACILITY MAINTENANCE MANAGEMENT API
(Sistem Pelaporan dan Penanganan Kerusakan Fasilitas Kampus)


# DEKSRIPSI PROYEK
Campus Facility Maintenance Management API adalah sistem backend untuk pengelolaan pelaporan dan penanganan kerusakan fasilitas kampus secara terstruktur dan berbasis role. Sistem ini dirancang untuk mempermudah proses monitoring, pelaporan, serta tindak lanjut perbaikan fasilitas kampus agar lebih efisien, transparan, dan terdokumentasi dengan baik.

Dalam sistem ini terdapat tiga jenis role, yaitu student, staff, dan admin, yang masing-masing memiliki hak akses berbeda. 

1. Student 
- Register
- Login
- Melihat daftar fasilitas
- Membuat laporan kerusakan
- Melihat laporan milik sendiri

2. Staff
- Login
- Melihat seluruh laporan
- Mengubah status laporan
- Menambahkan catatan perbaikan

3. Admin
- Login
- Mengelola kategori fasilitas
- Mengelola fasilitas
- Mengelola akun staff

Seluruh proses pelaporan tersimpan dalam database yang saling berelasi antara users, categories, facilities, reports, dan maintenance_logs sehingga data tetap konsisten, terdokumentasi, dan mudah dikembangkan. 


# TECH STACK
- Node.js
- Express.js
- Prisma ORM
- MySQL
- JWT Authentication
- Zod Validation
- Swagger (OpenAPI)


# Entity Relationship Diagram (ERD)

![ERD](assets/ERD.png)


# Local Setup

1. Clone Repository
```bash
git clone https://github.com/mutiaraaisyshofi/CAMPUS-FACILITY-MAINTENANCE_API.git
cd CAMPUS-FACILITY-MAINTENANCE_API
```

2. Install Dependencies
```bash
npm install
```

3. Buat File Environment
Salin file `.env.example` menjadi `.env`
```bash
cp .env.example .env
```
atau buat file `.env` secara manual.

4. Isi Environment Variables
Sesuaikan isi file `.env` dengan konfigurasi database yang digunakan.

5. Generate Prisma Client
```bash
npx prisma generate
```
6. Push Database Schema
```bash
npx prisma db push
```

7. Jalankan Seed Database
```bash
npx prisma db seed
```

8. Jalankan Server
```bash
npm run dev
```

Aplikasi akan berjalan pada: http://localhost:3000
Swagger Documentation: http://localhost:3000/api-docs


# Environment Variables (.env.example)

Buat file `.env` berdasarkan `.env.example` berikut.

.env
DATABASE_URL="mysql://username:password@localhost:3306/database_name"

JWT_SECRET=your_jwt_secret

BASE_URL=http://localhost:3000


# Deployment

1. Backend API : https://campus-facility-maintenanceapi-production.up.railway.app

2. Swagger Documentation: https://campus-facility-maintenanceapi-production.up.railway.app/api-docs


# Default Seed Account

1. Admin

Email: admin.facilitymaintenance@unand.ac.id
Password: eduadmin.unand

2. Staff

Email: staff.facilitymaintenance@unand.ac.id
Password: edustaff.unand

3. Student

Email: student.mutiaraaisyshofi@unand.ac.id
Password: mutiaraaisy.student.unand


# Features

1. Authentication

- Register
- Login
- JWT Authentication
- Role-Based Authorization

2. Category Management

- Create Category
- Get All Categories
- Get Category by ID
- Update Category
- Delete Category

3. Facility Management

- Create Facility
- Get All Facilities
- Get Facility by ID
- Update Facility
- Delete Facility

4. Report Management

- Create Report
- Get All Reports
- Get My Reports
- Update Report Status

5. Maintenance Log Management

- Create Maintenance Log
- Get Maintenance Logs by Report


# Author

Mutiara Aisy Shofi