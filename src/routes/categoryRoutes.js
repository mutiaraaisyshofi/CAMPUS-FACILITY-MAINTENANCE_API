const express = require("express");
const { authenticate } = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/authorize");
const router = express.Router();

const categoryController = require("../controllers/categoryController");

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Menambahkan kategori baru
 *     tags: [Categories]
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
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ruang Kelas
 *     responses:
 *       201:
 *         description: Kategori berhasil dibuat
 *       400:
 *         description: Validasi gagal
 *       401:
 *         description: Token tidak ditemukan atau tidak valid
 *       403:
 *         description: Akses ditolak (bukan admin)
 */
router.post(
  "/",
  authenticate,
  authorize("admin"),
  categoryController.createCategory
);

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Mendapatkan seluruh kategori fasilitas
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Daftar kategori berhasil diambil
 */
router.get("/", categoryController.getAllCategories);

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Mendapatkan kategori berdasarkan ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detail kategori berhasil diambil
 *       404:
 *         description: Kategori tidak ditemukan
 */
router.get("/:id", categoryController.getCategoryById);
/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Mengubah data kategori
 *     tags: [Categories]
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
 *                 example: Laboratorium
 *     responses:
 *       200:
 *         description: Kategori berhasil diperbarui
 *       400:
 *         description: Validasi gagal
 *       401:
 *         description: Token tidak valid
 *       403:
 *         description: Akses ditolak
 *       404:
 *         description: Kategori tidak ditemukan
 */
router.put(
  "/:id",
  authenticate,
  authorize("admin"),
  categoryController.updateCategory
);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Menghapus kategori
 *     tags: [Categories]
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
 *         description: Kategori berhasil dihapus
 *       401:
 *         description: Token tidak valid
 *       403:
 *         description: Akses ditolak
 *       404:
 *         description: Kategori tidak ditemukan
 */
router.delete(
  "/:id",
  authenticate,
  authorize("admin"),
  categoryController.deleteCategory
);

module.exports = router;