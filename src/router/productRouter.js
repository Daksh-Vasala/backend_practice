const { getAllProducts, getProductById, createProduct, deleteProduct } = require("../controllers/productController");

const router = require("express").Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/create", createProduct);
router.delete("/:id", deleteProduct);

module.exports = router;