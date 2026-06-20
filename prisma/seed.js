const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Hapus data lama (urutan penting)
  await prisma.maintenanceLog.deleteMany();
  await prisma.report.deleteMany();
  await prisma.facility.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  const adminPassword = await bcrypt.hash(
    "eduadmin.unand",
    10
  );

  const staffPassword = await bcrypt.hash(
    "edustaff.unand",
    10
  );

  const studentPassword = await bcrypt.hash(
    "mutiaraaisy.student.unand",
    10
  );

  // ======================
  // USERS
  // ======================

  const admin = await prisma.user.create({
    data: {
      name: "Admin - Facility Maintenance Center",
      email: "admin.facilitymaintenance@unand.ac.id",
      password: adminPassword,
      role: "admin",
    },
  });

  const staff = await prisma.user.create({
    data: {
      name: "Staff - Facility Maintenance Center",
      email: "staff.facilitymaintenance@unand.ac.id",
      password: staffPassword,
      role: "staff",
    },
  });

  const student = await prisma.user.create({
    data: {
      name: "Mutiara Aisy Shofi",
      email: "student.mutiaraaisyshofi@unand.ac.id",
      password: studentPassword,
      role: "student",
    },
  });

  // ======================
  // CATEGORIES
  // ======================

  const category1 = await prisma.category.create({
    data: {
      name: "Ruang Kelas",
    },
  });

  const category2 = await prisma.category.create({
    data: {
      name: "Koridor",
    },
  });

  const category3 = await prisma.category.create({
    data: {
      name: "WC",
    },
  });

  const category4 = await prisma.category.create({
    data: {
      name: "Mushalla",
    },
  });

  const category5 = await prisma.category.create({
    data: {
      name: "Taman dan Gazebo",
    },
  });

  const category6 = await prisma.category.create({
    data: {
      name: "Halaman Parkir",
    },
  });

  // ======================
  // FACILITIES
  // ======================

  const facility1 = await prisma.facility.create({
    data: {
      name: "Proyektor Ruang A1.2",
      location: "Gedung A",
      categoryId: category1.id,
    },
  });

  const facility2 = await prisma.facility.create({
    data: {
      name: "Mikrofon dan Pengeras Suara",
      location: "Mushalla Fakultas Teknik",
      categoryId: category4.id,
    },
  });

  const facility3 = await prisma.facility.create({
    data: {
      name: "Lampu Koridor Lantai 2",
      location: "Gedung B",
      categoryId: category2.id,
    },
  });

  const facility4 = await prisma.facility.create({
    data: {
      name: "Keran WC Pria",
      location: "Gedung C",
      categoryId: category3.id,
    },
  });

  const facility5 = await prisma.facility.create({
    data: {
      name: "Bangku Gazebo Timur",
      location: "Area Taman Kampus",
      categoryId: category5.id,
    },
  });

  // ======================
  // REPORTS
  // ======================

  const report1 = await prisma.report.create({
    data: {
      title: "Proyektor Mati",
      description: "Proyektor tidak dapat dinyalakan saat perkuliahan berlangsung.",
      status: "PENDING",
      userId: student.id,
      facilityId: facility1.id,
    },
  });

  const report2 = await prisma.report.create({
    data: {
      title: "Mikrofon Tidak Berfungsi",
      description: "Suara tidak keluar dari pengeras suara saat digunakan.",
      status: "IN_PROGRESS",
      userId: student.id,
      facilityId: facility2.id,
    },
  });

  // ======================
  // MAINTENANCE LOG
  // ======================

  await prisma.maintenanceLog.create({
    data: {
      notes: "Pemeriksaan kabel dan penggantian konektor mikrofon.",
      repairDate: new Date(),
      reportId: report2.id,
      technicianId: staff.id,
    },
  });

  console.log("Seed database berhasil!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });