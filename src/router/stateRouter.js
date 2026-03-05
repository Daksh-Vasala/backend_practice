const { getStates, getStateById, create, deleteById } = require("../controllers/stateController");

const router = require("express").Router();

router.get("/", getStates);

router.get("/:id", getStateById);

router.post("/", create);

router.delete("/:id", deleteById);

module.exports = router;