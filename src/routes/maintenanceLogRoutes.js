const express = require("express");

const router = express.Router();

const {
  authenticate,
} = require("../middlewares/authMiddleware");

const authorize = require("../middlewares/authorize");

const maintenanceLogController = require("../controllers/maintenanceLogController");

/**
 * @swagger
 * /maintenance-logs:
 *   post:
 *     summary: Create Maintenance Log
 *     tags: [Maintenance Logs]
 *     security:
 *       - bearerAuth: []
 *     description: Staff menambahkan catatan proses perbaikan fasilitas.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - notes
 *               - repairDate
 *               - reportId
 *             properties:
 *               notes:
 *                 type: string
 *                 example: Proyektor berhasil diperbaiki dan dapat digunakan kembali.
 *               repairDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2026-06-26T10:00:00.000Z
 *               reportId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Maintenance log berhasil dibuat.
 *       400:
 *         description: Validasi gagal.
 *       401:
 *         description: Token tidak valid.
 *       403:
 *         description: Hanya staff yang dapat membuat maintenance log.
 */
router.post(
  "/",
  authenticate,
  authorize("staff"),
  maintenanceLogController.createMaintenanceLog
);

/**
 * @swagger
 * /maintenance-logs/report/{reportId}:
 *   get:
 *     summary: Get Maintenance Logs by Report
 *     tags: [Maintenance Logs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: reportId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Daftar maintenance log berhasil ditampilkan.
 *       401:
 *         description: Token tidak valid.
 */
router.get(
  "/report/:reportId",
  authenticate,
  maintenanceLogController.getLogsByReport
);

module.exports = router;