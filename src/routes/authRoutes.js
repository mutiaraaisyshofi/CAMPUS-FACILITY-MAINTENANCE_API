const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registrasi Pengguna Baru
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - role
 *             properties:
 *               name:
 *                 type: string
 *                 example: Mutiara Aisy Shofi
 *               email:
 *                 type: string
 *                 example: mutiara@student.com
 *               password:
 *                 type: string
 *                 example: password123
 *               role:
 *                 type: string
 *                 example: student
 *     responses:
 *       201:
 *         description: Register berhasil
 *       400:
 *         description: Validasi gagal atau email sudah digunakan
 */
router.post("/register", authController.register);
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login Pengguna
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: student.mutiaraaisyshofi@unand.ac.id
 *               password:
 *                 type: string
 *                 example: mutiaraaisy.student.unand
 *     responses:
 *       200:
 *         description: Login berhasil dan token JWT dikembalikan
 *       400:
 *         description: Input tidak valid
 *       401:
 *         description: Email atau password salah
 */
router.post("/login", authController.login);

module.exports = router;