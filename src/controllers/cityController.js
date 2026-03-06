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

const updateCity = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedCity = await citySchema.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    if (!updatedCity) {
      return res.status(404).json({
        message: "City not found",
      });
    }

    res.status(200).json({
      message: "City updated successfully",
      data: updatedCity,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

const updateLandmark = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedObject = await citySchema.findByIdAndUpdate(
      id,
      { $push: { landmarks: req.body.landmarks } },
      { returnDocument: "after" },
    );

    res.status(200).json({
      message: "City updated",
      data: updatedObject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

const removeLandmark = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedObject = await citySchema.findByIdAndUpdate(
      id,
      { $pull: { landmarks: req.body.landmarks } },
      { returnDocument: "after" },
    );

    res.status(200).json({
      message: "City updated",
      data: updatedObject,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
};

const searchCity = async (req, res) => {
  try {
    const { name } = req.query;
    const city = await citySchema.find({ name });
    if (city.length > 0) {
      res.status(200).json({
        message: "City found",
        data: city,
      });
    } else {
      res.json({
        message: "City not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

module.exports = {
  getCities,
  getCityById,
  create,
  deleteById,
  searchCity,
  removeLandmark,
  updateLandmark,
  updateCity
};
