const express = require("express");
const { authenticate } = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/authorize");
const router = express.Router();

const facilityController = require("../controllers/facilityController");
router.post(
  "/",
  authenticate,
  authorize("admin"),
  facilityController.createFacility
);

/**
 * @swagger
 * /facilities:
 *   get:
 *     summary: Mendapatkan seluruh data fasilitas
 *     tags: [Facilities]
 *     responses:
 *       200:
 *         description: Daftar fasilitas berhasil diambil
 */
router.get("/", facilityController.getAllFacilities);

/**
 * @swagger
 * /facilities/{id}:
 *   get:
 *     summary: Mendapatkan detail fasilitas berdasarkan ID
 *     tags: [Facilities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detail fasilitas berhasil diambil
 *       404:
 *         description: Fasilitas tidak ditemukan
 */
router.get("/:id", facilityController.getFacilityById);

/**
 * @swagger
 * /facilities:
 *   post:
 *     summary: Menambahkan fasilitas baru
 *     tags: [Facilities]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - location
 *               - categoryId
 *             properties:
 *               name:
 *                 type: string
 *                 example: Proyektor Ruang A1.2
 *               location:
 *                 type: string
 *                 example: Gedung A
 *               categoryId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Fasilitas berhasil dibuat
 *       400:
 *         description: Validasi gagal
 *       401:
 *         description: Token tidak ditemukan atau tidak valid
 *       403:
 *         description: Akses ditolak (bukan admin)
 */

/**
 * @swagger
 * /facilities/{id}:
 *   put:
 *     summary: Mengubah data fasilitas
 *     tags: [Facilities]
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
 *             properties:
 *               name:
 *                 type: string
 *                 example: Proyektor Ruang A1.2
 *               location:
 *                 type: string
 *                 example: Gedung A
 *               categoryId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Fasilitas berhasil diperbarui
 *       400:
 *         description: Validasi gagal
 *       401:
 *         description: Token tidak valid
 *       403:
 *         description: Akses ditolak
 *       404:
 *         description: Fasilitas tidak ditemukan
 */
router.put(
  "/:id",
  authenticate,
  authorize("admin"),
  facilityController.updateFacility
);

/**
 * @swagger
 * /facilities/{id}:
 *   delete:
 *     summary: Menghapus fasilitas
 *     tags: [Facilities]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Fasilitas berhasil dihapus
 *       401:
 *         description: Token tidak valid
 *       403:
 *         description: Akses ditolak
 *       404:
 *         description: Fasilitas tidak ditemukan
 */
router.delete(
  "/:id",
  authenticate,
  authorize("admin"),
  facilityController.deleteFacility
);

module.exports = router;