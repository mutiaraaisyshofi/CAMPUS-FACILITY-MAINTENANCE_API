const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");
const authRoutes = require("./routes/authRoutes");
const { authenticate, } = require("./middlewares/authMiddleware");
const { success } = require("zod");

const app = express();
const categoryRoutes = require("./routes/categoryRoutes");
const facilityRoutes = require("./routes/facilityRoutes");
const reportRoutes = require("./routes/reportRoutes");

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/categories", categoryRoutes);
app.use("/facilities", facilityRoutes);
app.use("/reports", reportRoutes);

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

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});