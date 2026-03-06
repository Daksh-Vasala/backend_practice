const categorySchema = require("../models/categoryModel.js");

const getCategories = async (req, res) => {
  const categories = await categorySchema.find();
  res.status(200).json({
    message: "Data fetched",
    data: categories,
  });
};

const getCategoryById = async (req, res) => {
  const category = await categorySchema.findById(req.params.id);
  if (category) {
    res.status(200).json({
      message: "Category found",
      data: category,
    });
  } else {
    res.json({
      message: "Category not found",
    });
  }
};

const create = async (req, res) => {
  const category = await categorySchema.create(req.body);
  if (category) {
    res.status(201).json({
      message: "Category created",
      data: category,
    });
  } else {
    res.json({
      message: "Error in creating Category",
    });
  }
};

const deleteById = async (req, res) => {
  const deletedCategory = await categorySchema.findByIdAndDelete(req.params.id);
  if (deletedCategory) {
    res.status(200).json({
      message: "Category deleted",
      data: deletedCategory,
    });
  } else {
    res.json({
      message: "Error in deleting category",
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedCategory = await categorySchema.findByIdAndUpdate(
      id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      },
    );

    if (!updatedCategory) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    res.status(200).json({
      message: "Category updated successfully",
      data: updatedCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

const updateTags = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedObject = await categorySchema.findByIdAndUpdate(
      id,
      { $push: { tags: req.body.tags } },
      { returnDocument: "after" },
    );

    res.status(200).json({
      message: "Category updated",
      data: updatedObject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

const removeTags = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedObject = await categorySchema.findByIdAndUpdate(
      id,
      { $pull: { tags: req.body.tags } },
      { returnDocument: "after" },
    );

    res.status(200).json({
      message: "Category updated",
      data: updatedObject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

const searchCategory = async (req, res) => {
  try {
    const { title } = req.query;
    const category = await categorySchema.find({ title });
    if (category.length > 0) {
      res.status(200).json({
        message: "Category found",
        data: book,
      });
    } else {
      res.json({
        message: "Category not found",
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
  getCategories,
  getCategoryById,
  create,
  deleteById,
  updateTags,
  removeTags,
  searchCategory,
  updateCategory,
};
