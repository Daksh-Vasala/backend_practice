const { getCategories, getCategoryById, create, deleteById } = require("../controllers/categoryController");

const router = require("express").Router();

router.get("/", getCategories);

router.get("/:id", getCategoryById);

router.post("/", create);

router.delete("/:id", deleteById);

module.exports = router;