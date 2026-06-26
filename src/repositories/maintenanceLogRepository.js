const prisma = require("../configs/prisma");

const createMaintenanceLog = async (data) => {
  return prisma.maintenanceLog.create({
    data,
  });
};

const getLogsByReport = async (reportId) => {
  return prisma.maintenanceLog.findMany({
    where: {
      reportId,
    },
    include: {
      technician: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

module.exports = {
  createMaintenanceLog,
  getLogsByReport,
};