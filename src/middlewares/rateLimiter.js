const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: "Terlalu banyak request. Silakan coba beberapa saat lagi.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = apiLimiter;