const { z } = require("zod");

const registerSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  password: z.string().min(6),
  role: z.enum(["student", "staff", "admin"]),
});

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
})
module.exports = {
  registerSchema,
  loginSchema,
};