const bookSchema = require("../models/bookModel.js")

const getBooks = async (req, res) => {
  const books = await bookSchema.find();
  res.status(200).json({
    message: "Data fetched",
    data: books
  })
}

const getBookById = async (req, res) => {
  const book = await bookSchema.findById(req.params.id);
  if(book){
    res.status(200).json({
      message: "book found",
      data: book
    })
  } else {
    res.json({
      message: "book not found",
    })
  }
}

const create = async (req, res) => {
  const book = await bookSchema.create(req.body);
  if(book){
    res.status(201).json({
      message: "book created",
      data: book
    })
  } else {
    res.json({
      message: "Error in creating book",
    })
  }
}

const deleteById = async (req, res) => {
  const deletedBook = await bookSchema.findByIdAndDelete(req.params.id);
  if(deletedBook){
    res.status(200).json({
      message: "Book deleted",
      data: deletedBook
    })
  } else {
    res.json({
      message: "Error in deleting book",
    })
  }
}

module.exports = {
  getBooks, getBookById, create, deleteById
}