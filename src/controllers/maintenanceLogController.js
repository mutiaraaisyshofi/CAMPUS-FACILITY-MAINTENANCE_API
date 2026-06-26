const maintenanceLogService = require("../services/maintenanceLogService");
const {
  maintenanceLogSchema,
} = require("../validators/maintenanceLogValidator");

const createMaintenanceLog = async (req, res) => {
  try {
    const data = maintenanceLogSchema.parse(req.body);

    const log =
      await maintenanceLogService.createMaintenanceLog({
        ...data,
        technicianId: req.user.id,
      });

    res.status(201).json({
      success: true,
      data: log,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getLogsByReport = async (req, res) => {
  const logs =
    await maintenanceLogService.getLogsByReport(
      Number(req.params.reportId)
    );

  res.json({
    success: true,
    data: logs,
  });
};

module.exports = {
  createMaintenanceLog,
  getLogsByReport,
};