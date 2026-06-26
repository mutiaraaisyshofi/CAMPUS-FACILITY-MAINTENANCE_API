require('dotenv').config(); 
console.log("APP STARTED");
console.log("DATABASE_URL =", process.env.DATABASE_URL);

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

const express = require("express");

const { authenticate, } = require("./middlewares/authMiddleware");
const { success } = require("zod");

const app = express();
const cors = require("cors")

const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const facilityRoutes = require("./routes/facilityRoutes");
const reportRoutes = require("./routes/reportRoutes");
const maintenanceLogRoutes = require("./routes/maintenanceLogRoutes");
const apiLimiter = require("./middlewares/rateLimiter");

app.use(cors())
app.use(apiLimiter);
app.use(express.json());
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.use("/auth", authRoutes);
app.use("/categories", categoryRoutes);
app.use("/facilities", facilityRoutes);
app.use("/reports", reportRoutes);
app.use(
  "/maintenance-logs",
  maintenanceLogRoutes
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Campus Facility Maintenance API Running",
  });
});

app.get(
  "/profile", 
  authenticate,
  (req, res) => {
    res.json({
      success: true,
      user: req.user,
    });
  }
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});