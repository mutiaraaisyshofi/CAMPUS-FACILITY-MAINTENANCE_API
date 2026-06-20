const prisma = require("../configs/prisma");

const createReport = async (data) => {
  return prisma.report.create({
    data,
  });
};

const getAllReports = async () => {
  return prisma.report.findMany({
    include: {
      user: true,
      facility: true,
    },
  });
};

const updateReportStatus = async (id, status) => {
  return prisma.report.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });
};

const getReportsByUserId = async (userId) => {
  return prisma.report.findMany({
    where: {
      userId,
    },
    include: {
      facility: true,
    },
  });
};

module.exports = {
  createReport,
  getAllReports,
  updateReportStatus,
  getReportsByUserId,
};