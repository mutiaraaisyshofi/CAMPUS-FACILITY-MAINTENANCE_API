const prisma = require("../configs/prisma");

const createFacility = async (data) => {
    return prisma.facility.create({
        data,
    });
};

const getAllFacilities = async () => {
    return prisma.facility.findMany({
        include: {
            category: true,
        },
    });
};

const getFacilityById = async (id) => {
    return prisma.facility.findUnique({
        where: {
            id,
        },
        include: {
            category: true,
        },
    });
};

const updateFacility = async (id, data) => {
    return prisma.facility.update({
        where: {
            id,
        },
        data,
    });
};

const deleteFacility = async (id) => {
    return prisma.facility.delete({
        where: {
            id,
        },
    });
};

module.exports = {
    createFacility,
    getAllFacilities,
    getFacilityById,
    updateFacility,
    deleteFacility,
};