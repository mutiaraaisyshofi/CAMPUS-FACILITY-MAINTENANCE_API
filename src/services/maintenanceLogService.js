const maintenanceLogRepository = require("../repositories/maintenanceLogRepository");

const createMaintenanceLog = async (data) => {
  return maintenanceLogRepository.createMaintenanceLog(data);
};

const getLogsByReport = async (reportId) => {
  return maintenanceLogRepository.getLogsByReport(reportId);
};

module.exports = {
  createMaintenanceLog,
  getLogsByReport,
};