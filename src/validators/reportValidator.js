const { z } = require("zod");

const reportSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(5),
  facilityId: z.number(),
});

module.exports = {
  reportSchema,
};