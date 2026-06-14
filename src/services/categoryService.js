const categoryRepository = require("../repositories/categoryRepository");

const createCategory = async (data) => {
    return categoryRepository.createCategory(data);
};

const getAllCategories = async () => {
    return categoryRepository.getAllCategories();
};

const getCategoryById = async (id) => {
    return categoryRepository.getCategoryById(id);
}

const updateCategory = async (id, data) => {
    return categoryRepository.updateCategory(id, data);
}

const deleteCategory = async (id) => {
    return categoryRepository.deleteCategory(id);
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
};