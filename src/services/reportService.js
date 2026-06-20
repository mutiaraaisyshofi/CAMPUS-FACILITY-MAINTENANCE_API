const reportRepository = require("../repositories/reportRepository");

const createReport = async (data) => {
  return reportRepository.createReport(data);
};

const getAllReports = async () => {
  return reportRepository.getAllReports();
};

const updateReportStatus = async (id, status) => {
  return reportRepository.updateReportStatus(
    id,
    status
  );
};

const getMyReports = async (userId) => {
  return reportRepository.getReportsByUserId(userId);
};

module.exports = {
  createReport,
  getAllReports,
  updateReportStatus,
  getMyReports,
};