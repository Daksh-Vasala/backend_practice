const { getCities, getCityById, create, deleteById } = require("../controllers/cityController");

const router = require("express").Router();

router.get("/", getCities);

router.get("/:id", getCityById);

router.post("/", create);

router.delete("/:id", deleteById);

module.exports = router;