const { success } = require("zod");
const categoryService = require("../services/categoryService");
const { categorySchema } = require("../validators/categoryValidator");

const createCategory = async (req, res) => {
    try {
        const data = categorySchema.parse(req.body);

        const category = await categoryService.createCategory(data);

        res.status(201).json({
            success: true,
            data: category,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const getAllCategories = async (req, res) => {
    const categories = await categoryService.getAllCategories();

    res.json({
        success: true,
        data: categories,
    });
};

const getCategoryById = async (req, res) => {
    try {
        const category = await categoryService.getCategoryById(
            Number(req.params.id)
        );

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Kategori tidak ditemukan",
            });
        }

        res.json({
            success: true,
            data: category,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const updateCategory = async (req, res) => {
    try {
        const data = categorySchema.parse(req.body);
        
        const category = await categoryService.updateCategory(
            Number(req.params.id),
            data
        );

        res.json({
            success: true,
            message: "Kategori berhasil diupdate",
            data: category,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const deleteCategory = async (req, res) => {
    try {
        await categoryService.deleteCategory(
            Number(req.params.id)
        );

        res.json({
            success: true, 
            message: "Kategori berhasil dihapus",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
};