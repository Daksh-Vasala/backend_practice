const stateSchema = require("../models/stateModel.js")

const getStates = async (req, res) => {
  const states = await stateSchema.find();
  res.status(200).json({
    message: "Data fetched",
    data: states
  })
}

const getStateById = async (req, res) => {
  const state = await stateSchema.findById(req.params.id);
  if(state){
    res.status(200).json({
      message: "State found",
      data: state
    })
  } else {
    res.json({
      message: "State not found",
    })
  }
}

const create = async (req, res) => {
  const state = await stateSchema.create(req.body);
  if(state){
    res.status(201).json({
      message: "State created",
      data: state
    })
  } else {
    res.json({
      message: "Error in creating state",
    })
  }
}

const deleteById = async (req, res) => {
  const deletedState = await stateSchema.findByIdAndDelete(req.params.id);
  if(deletedState){
    res.status(200).json({
      message: "State deleted",
      data: deletedState
    })
  } else {
    res.json({
      message: "Error in deleting state",
    })
  }
}

module.exports = {
  getStates, getStateById, create, deleteById
}