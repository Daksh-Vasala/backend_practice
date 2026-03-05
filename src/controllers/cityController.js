const citySchema = require("../models/cityModel.js");

const getCities = async (req, res) => {
  const cities = await citySchema.find();
  res.status(200).json({
    message: "Data fetched",
    data: cities,
  });
};

const getCityById = async (req, res) => {
  const city = await citySchema.findById(req.params.id);
  if (city) {
    res.status(200).json({
      message: "City found",
      data: city,
    });
  } else {
    res.json({
      message: "City not found",
    });
  }
};

const create = async (req, res) => {
  const city = await citySchema.create(req.body);
  if (city) {
    res.status(201).json({
      message: "City created",
      data: city,
    });
  } else {
    res.json({
      message: "Error in creating city",
    });
  }
};

const deleteById = async (req, res) => {
  const deletedCity = await citySchema.findByIdAndDelete(req.params.id);
  if (deletedCity) {
    res.status(200).json({
      message: "City deleted",
      data: deletedCity,
    });
  } else {
    res.json({
      message: "Error in deleting city",
    });
  }
};

module.exports = {
  getCities,
  getCityById,
  create,
  deleteById,
};
