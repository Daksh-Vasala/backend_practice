const stateSchema = require("../models/stateModel.js");

const getStates = async (req, res) => {
  const states = await stateSchema.find();
  res.status(200).json({
    message: "Data fetched",
    data: states,
  });
};

const getStateById = async (req, res) => {
  const state = await stateSchema.findById(req.params.id);
  if (state) {
    res.status(200).json({
      message: "State found",
      data: state,
    });
  } else {
    res.json({
      message: "State not found",
    });
  }
};

const create = async (req, res) => {
  const state = await stateSchema.create(req.body);
  if (state) {
    res.status(201).json({
      message: "State created",
      data: state,
    });
  } else {
    res.json({
      message: "Error in creating state",
    });
  }
};

const deleteById = async (req, res) => {
  const deletedState = await stateSchema.findByIdAndDelete(req.params.id);
  if (deletedState) {
    res.status(200).json({
      message: "State deleted",
      data: deletedState,
    });
  } else {
    res.json({
      message: "Error in deleting state",
    });
  }
};

const updateLanguage = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedObject = await stateSchema.findByIdAndUpdate(
      id,
      { $push: { languages: req.body.languages } },
      { returnDocument: "after" },
    );

    res.status(200).json({
      message: "State updated",
      data: updatedObject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

const removeLanguage = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedObject = await stateSchema.findByIdAndUpdate(
      id,
      { $pull: { languages: req.body.languages } },
      { returnDocument: "after" },
    );

    res.status(200).json({
      message: "State updated",
      data: updatedObject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

const searchState = async (req, res) => {
  try {
    const { title } = req.query;
    const state = await stateSchema.find({ title });
    if (state.length > 0) {
      res.status(200).json({
        message: "State found",
        data: book,
      });
    } else {
      res.json({
        message: "State",
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
  getStates,
  getStateById,
  create,
  deleteById,
  searchState,
  removeLanguage,
  updateLanguage,
};
