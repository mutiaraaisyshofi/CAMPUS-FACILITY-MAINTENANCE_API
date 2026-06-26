const prisma = require("../configs/prisma");

const createReport = async (data) => {
  return prisma.report.create({
    data,
  });
};

const getAllReports = async (query) => {

  // FILTER

  const where = {};

  if (query.status) {
    where.status = query.status;
  }

  // SORTING

  let orderBy = {
    createdAt: "desc",
  };

  if (query.sort === "oldest") {
    orderBy = {
      createdAt: "asc",
    };
  }

  // PAGINATION
  
  const page = Number(query.page) || 1;

  const limit = Number(query.limit) || 5;

  const skip = (page - 1) * limit;

  // QUERY
 
  return prisma.report.findMany({

    where,

    orderBy,

    skip,

    take: limit,

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