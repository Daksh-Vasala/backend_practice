const { getBooks, getBookById, create, deleteById } = require("../controllers/bookController");

const router = require("express").Router();

router.get("/", getBooks);

router.get("/:id", getBookById);

router.post("/", create);

router.delete("/:id", deleteById);

module.exports = router;