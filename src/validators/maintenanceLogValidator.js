const { z } = require("zod");

const maintenanceLogSchema = z.object({
  notes: z.string().min(5),
  repairDate: z.string().datetime(),
  reportId: z.number(),
});

module.exports = {
  maintenanceLogSchema,
};