const { getStates, getStateById, create, deleteById, searchState, updateLanguage, removeLanguage } = require("../controllers/stateController");

const router = require("express").Router();

router.get("/search", searchState);

router.get("/", getStates);

router.get("/:id", getStateById);

router.post("/", create);

router.delete("/:id", deleteById);

router.put("/updateLanguage/:id", updateLanguage);

router.put("/removeLanguage/:id", removeLanguage);

module.exports = router;