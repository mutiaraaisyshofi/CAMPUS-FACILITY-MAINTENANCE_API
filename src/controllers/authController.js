const { success } = require("zod");
const authService = require("../services/authService");
const { registerSchema, loginSchema } = require("../validators/authValidator");

const register = async (req, res) => {
  try {
    const validatedData = registerSchema.parse(req.body);

    const user = await authService.register(
      validatedData.name,
      validatedData.email,
      validatedData.password,
      validatedData.role
    );

    res.status(201).json({
      success: true,
      message: "Register berhasil",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const validatedData = loginSchema.parse(req.body);

    const result = await authService.login(
      validatedData.email,
      validatedData.password
    );

    res.status(200).json({
      success: true,
      message: "Login berhasil",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  register,
  login,
};