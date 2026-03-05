const { getAllEmployees, getAllEmployeesBySalary, getAllEmployeeById } = require("../controllers/employeeController");

const router = require("express").Router();

router.get("/employees", getAllEmployees)

router.get("/employees/:salary", getAllEmployeesBySalary)

router.get("/employee/:id", getAllEmployeeById);

module.exports = router;