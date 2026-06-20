const reportService = require("../services/reportService");
const { reportSchema } = require("../validators/reportValidator");
const {  reportStatusSchema, } = require("../validators/reportStatusValidator");

const createReport = async (req, res) => {
  try {
    const validatedData = reportSchema.parse(req.body);

    const report = await reportService.createReport({
      ...validatedData,
      userId: req.user.id,
    });

    res.status(201).json({
      success: true,
      data: report,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllReports = async (req, res) => {
  const reports = await reportService.getAllReports();

  res.json({
    success: true,
    data: reports,
  });
};

const updateReportStatus = async (req, res) => {
  try {
    const { status } =
      reportStatusSchema.parse(req.body);

    const report =
      await reportService.updateReportStatus(
        Number(req.params.id),
        status
      );

    res.json({
      success: true,
      message: "Status laporan berhasil diubah",
      data: report,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getMyReports = async (req, res) => {
  try {
    const reports =
      await reportService.getMyReports(
        req.user.id
      );

    res.json({
      success: true,
      data: reports,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createReport,
  getAllReports,
  updateReportStatus,
  getMyReports,
};