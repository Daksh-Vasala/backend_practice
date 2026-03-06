const {
  getBooks,
  getBookById,
  create,
  deleteById,
  searchBook,
  updateFormat,
  removeFormat,
  updateBook,
} = require("../controllers/bookController");

const router = require("express").Router();

router.get("/search", searchBook);

router.get("/", getBooks);

router.get("/:id", getBookById);

router.post("/", create);

router.delete("/:id", deleteById);

router.put("/:id", updateBook);

router.put("/updateFormat/:id", updateFormat);

router.put("/removeFormat/:id", removeFormat);

module.exports = router;
