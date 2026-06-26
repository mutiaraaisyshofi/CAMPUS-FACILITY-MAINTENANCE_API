const express = require("express");
const router = express.Router();

const reportController = require("../controllers/reportController");
const { authenticate } = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/authorize");

/**
 * @swagger
 * /reports:
 *   post:
 *     summary: Membuat laporan kerusakan fasilitas
 *     tags: [Reports]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - facilityId
 *             properties:
 *               title:
 *                 type: string
 *                 example: CCTV rusak
 *               description:
 *                 type: string
 *                 example: Kabel jaringan CCTV terekelupas
 *               facilityId:
 *                 type: integer
 *                 example: 7
 *     responses:
 *       201:
 *         description: Laporan berhasil dibuat
 *       400:
 *         description: Validasi gagal
 *       401:
 *         description: Token tidak valid atau tidak ditemukan
 *       403:
 *         description: Hanya student yang dapat membuat laporan
 */
router.post(
  "/",
  authenticate,
  authorize("student"),
  reportController.createReport
);

/**
 * @swagger
 * /reports/my-reports:
 *   get:
 *     summary: Melihat seluruh laporan milik mahasiswa yang sedang login
 *     tags: [Reports]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Daftar laporan berhasil diambil
 *       401:
 *         description: Token tidak valid atau tidak ditemukan
 *       403:
 *         description: Hanya student yang dapat mengakses endpoint ini
 */
router.get(
  "/my-reports",
  authenticate,
  authorize("student"),
  reportController.getMyReports
);

/**
 * @swagger
 * /reports:
 *   get:
 *     summary: Mengambil daftar laporan kerusakan fasilitas dengan dukungan filter berdasarkan status, pengurutan data, dan pagination.
 *     tags: [Reports]
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: query
 *         name: status
 *         required: false
 *         schema:
 *           type: string
 *           example: PENDING
 *         description: Filter laporan berdasarkan status
 *
 *       - in: query
 *         name: sort
 *         required: false
 *         schema:
 *           type: string
 *           enum:
 *             - newest
 *             - oldest
 *           example: newest
 *         description: Urutkan laporan berdasarkan tanggal
 *
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Nomor halaman
 *
 *       - in: query
 *         name: limit
 *         required: false
 *         schema:
 *           type: integer
 *           example: 5
 *         description: Jumlah data per halaman
 *
 *     responses:
 *       200:
 *         description: Daftar laporan berhasil diambil
 *       401:
 *         description: Token tidak valid atau tidak ditemukan
 */
router.get(
  "/",
  authenticate,
  reportController.getAllReports
);

/**
 * @swagger
 * /reports/{id}/status:
 *   patch:
 *     summary: Mengubah status laporan kerusakan
 *     tags: [Reports]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 example: IN_PROGRESS
 *     responses:
 *       200:
 *         description: Status laporan berhasil diperbarui
 *       400:
 *         description: Data status tidak valid
 *       401:
 *         description: Token tidak valid atau tidak ditemukan
 *       403:
 *         description: Hanya staff yang dapat mengubah status laporan
 *       404:
 *         description: Laporan tidak ditemukan
 */
router.patch(
  "/:id/status",
  authenticate,
  authorize("staff"),
  reportController.updateReportStatus
);

module.exports = router;