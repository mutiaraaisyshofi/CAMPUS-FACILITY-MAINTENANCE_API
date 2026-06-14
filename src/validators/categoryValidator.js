const { z } = require("zod");

const categorySchema = z.object({
    name: z.string().min(3),
});

module.exports = {
    categorySchema,
};