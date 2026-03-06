const bookSchema = require("../models/bookModel.js");

const getBooks = async (req, res) => {
  const books = await bookSchema.find();
  res.status(200).json({
    message: "Data fetched",
    data: books,
  });
};

const getBookById = async (req, res) => {
  const book = await bookSchema.findById(req.params.id);
  if (book) {
    res.status(200).json({
      message: "book found",
      data: book,
    });
  } else {
    res.json({
      message: "book not found",
    });
  }
};

const create = async (req, res) => {
  const book = await bookSchema.create(req.body);
  if (book) {
    res.status(201).json({
      message: "book created",
      data: book,
    });
  } else {
    res.json({
      message: "Error in creating book",
    });
  }
};

const deleteById = async (req, res) => {
  const deletedBook = await bookSchema.findByIdAndDelete(req.params.id);
  if (deletedBook) {
    res.status(200).json({
      message: "Book deleted",
      data: deletedBook,
    });
  } else {
    res.json({
      message: "Error in deleting book",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedBook = await bookSchema.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    if (!updatedBook) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.status(200).json({
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

const updateFormat = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedObject = await bookSchema.findByIdAndUpdate(
      id,
      { $push: { formats: req.body.formats } },
      { returnDocument: "after" },
    );

    res.status(200).json({
      message: "Book updated",
      data: updatedObject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

const removeFormat = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedObject = await bookSchema.findByIdAndUpdate(
      id,
      { $pull: { formats: req.body.formats } },
      { returnDocument: "after" },
    );

    res.status(200).json({
      message: "Book updated",
      data: updatedObject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

const searchBook = async (req, res) => {
  try {
    const { title } = req.query;
    const book = await bookSchema.find({ title });
    if (book.length > 0) {
      res.status(200).json({
        message: "Book found",
        data: book,
      });
    } else {
      res.json({
        message: "Book not found",
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
  getBooks,
  getBookById,
  create,
  deleteById,
  updateFormat,
  removeFormat,
  searchBook,
  updateBook
};
