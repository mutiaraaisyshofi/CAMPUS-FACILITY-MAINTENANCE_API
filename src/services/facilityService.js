const facilityRepository = require("../repositories/facilityRepository");

const createFacility = async (data) => {
    return facilityRepository.createFacility(data);
};

const getAllFacilities = async () => {
    return facilityRepository.getAllFacilities();
};

const getFacilityById = async (id) => {
    return facilityRepository.getFacilityById(id);
};

const updateFacility = async (id, data) => {
    return facilityRepository.updateFacility(id, data);
};

const deleteFacility = async (id) => {
    return facilityRepository.deleteFacility(id);
};

module.exports = {
    createFacility,
    getAllFacilities,
    getFacilityById,
    updateFacility,
    deleteFacility,
};
