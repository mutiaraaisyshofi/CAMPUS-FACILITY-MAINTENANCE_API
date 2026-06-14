const { z } = require("zod");

const facilitySchema = z.object({
    name: z.string().min(3),
    location: z.string().min(3),
    categoryId: z.number(),
});

module.exports = {
    facilitySchema,
};