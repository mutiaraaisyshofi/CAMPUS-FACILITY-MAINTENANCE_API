const { success } = require("zod");
const facilityService = require("../services/facilityService");
const { facilitySchema } = require("../validators/facilityValidator");

const createFacility = async (req, res) => {
    try {
        const data = facilitySchema.parse(req.body);

        const facility = await facilityService.createFacility(data);

        res.status(201).json({
            success: true,
            data: facility,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const getAllFacilities = async (req, res) => {
    const facilities = await facilityService.getAllFacilities();

    res.json({
        success: true,
        data: facilities,
    });
};

const getFacilityById = async (req, res) => {
    const facility = await facilityService.getFacilityById(
        Number(req.params.id)
    );

    res.json({
        success: true,
        data: facility,
    });
};

const updateFacility = async (req, res) => {
    const data = facilitySchema.parse(req.body);

    const facility = await facilityService.updateFacility(
        Number(req.params.id),
        data
    );

    res.json({
        success: true,
        data: facility,
    });
};

const deleteFacility = async (req, res) => {
    await facilityService.deleteFacility(
        Number(req.params.id)
    );

    res.json({
        success: true,
        message: "Facilitas berhasil dihapus",
    });
};

module.exports = {
    createFacility,
    getAllFacilities,
    getFacilityById,
    updateFacility,
    deleteFacility,
};