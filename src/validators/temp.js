const { z } = require("zod");

const reportStatusSchema = z.object({
  status: z.enum([
    "PENDING",
    "IN_PROGRESS",
    "COMPLETED",
  ]),
});

module.exports = {
  reportStatusSchema,
};