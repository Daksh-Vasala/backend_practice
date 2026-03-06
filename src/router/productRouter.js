const { getAllProducts, getProductById, createProduct, deleteProduct, updateColor, removeColor, searchProduct, updateProduct } = require("../controllers/productController");

const router = require("express").Router();

router.get("/", getAllProducts);
router.get("/search", searchProduct);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);
router.put("/updateColor/:id", updateColor);
router.put("/removeColor/:id", removeColor);

module.exports = router;