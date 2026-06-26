const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Campus Facility Maintenance API",
      version: "1.0.0",
      description:
        "API untuk sistem pelaporan dan penanganan kerusakan fasilitas kampus",
    },

    servers: [
      {
        url: "https://campus-facility-maintenanceapi-production.up.railway.app/"
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;