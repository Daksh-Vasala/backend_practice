const {
  getCategories,
  getCategoryById,
  create,
  deleteById,
  searchCategory,
  updateTags,
  removeTags,
  updateCategory,
} = require("../controllers/categoryController");

const router = require("express").Router();

router.get("/search", searchCategory);

router.get("/", getCategories);

router.get("/:id", getCategoryById);

router.post("/", create);

router.delete("/:id", deleteById);

router.put("/:id", updateCategory);

router.put("/updateTags/:id", updateTags);

router.put("/removeTags/:id", removeTags);

module.exports = router;
