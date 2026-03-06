const productSchema = require("../models/productModel.js");

const getAllProducts = async (req, res) => {
  const products = await productSchema.find();
  res.status(200).json({
    message: "All products fetched",
    data: products,
  });
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await productSchema.findById(id);
  if (product) {
    res.status(200).json({
      message: "Product found",
      data: product,
    });
  } else {
    res.json({
      message: "Product not found",
    });
  }
};

const createProduct = async (req, res) => {
  const product = await productSchema.create(req.body);

  if (product) {
    res.status(201).json({
      message: "Product created",
      data: product,
    });
  } else {
    res.json({
      message: "Error in creating product",
    });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;

  const deletedProduct = await productSchema.findByIdAndDelete(id);
  if (deletedProduct) {
    res.status(200).json({
      message: "Product deleted",
      data: deletedProduct,
    });
  } else {
    res.json({
      message: "Error in deleting product",
    });
  }
};

const updateColor = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedObject = await productSchema.findByIdAndUpdate(
      id,
      { $push: { color: req.body.color } },
      { returnDocument: "after" },
    );

    res.status(200).json({
      message: "Product updated",
      data: updatedObject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

const removeColor = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedObject = await productSchema.findByIdAndUpdate(
      id,
      { $pull: { color: req.body.color } },
      { returnDocument: "after" },
    );

    res.status(200).json({
      message: "Product updated",
      data: updatedObject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

const searchProduct = async (req, res) => {
  try {
    const { name } = req.query;
    const product = await productSchema.find({ name: name });
    if (product.length > 0) {
      res.status(200).json({
        message: "Product found",
        data: product,
      });
    } else {
      res.json({
        message: "Product not found",
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
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateColor,
  removeColor,
  searchProduct
};
