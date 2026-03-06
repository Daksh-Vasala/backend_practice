const {
  getCities,
  getCityById,
  create,
  deleteById,
  searchCity,
  updateLandmark,
  removeLandmark,
  updateCity,
} = require("../controllers/cityController");

const router = require("express").Router();

router.get("/search", searchCity);

router.get("/", getCities);

router.get("/:id", getCityById);

router.post("/", create);

router.delete("/:id", deleteById);

router.put("/:id", updateCity);

router.put("/updateLandmark/:id", updateLandmark);

router.put("/removeLandmark/:id", removeLandmark);

module.exports = router;