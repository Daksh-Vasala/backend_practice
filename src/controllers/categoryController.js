const categorySchema = require("../models/categoryModel.js")

const getCategories = async (req, res) => {
  const categories = await categorySchema.find();
  res.status(200).json({
    message: "Data fetched",
    data: categories
  })
}

const getCategoryById = async (req, res) => {
  const category = await categorySchema.findById(req.params.id);
  if(category){
    res.status(200).json({
      message: "Category found",
      data: category
    })
  } else {
    res.json({
      message: "Category not found",
    })
  }
}

const create = async (req, res) => {
  const category = await categorySchema.create(req.body);
  if(category){
    res.status(201).json({
      message: "Category created",
      data: category
    })
  } else {
    res.json({
      message: "Error in creating Category",
    })
  }
}

const deleteById = async (req, res) => {
  const deletedCategory = await categorySchema.findByIdAndDelete(req.params.id);
  if(deletedCategory){
    res.status(200).json({
      message: "Category deleted",
      data: deletedCategory
    })
  } else {
    res.json({
      message: "Error in deleting category",
    })
  }
}

module.exports = {
  getCategories, getCategoryById, create, deleteById
}