const employees = [
  {id: 101, name: "Daksh", salary: 35000},
  {id: 102, name: "Jagdish", salary: 20000},
  {id: 103, name: "Jigar", salary: 25000},
  {id: 104, name: "Meet", salary: 18000},
  {id: 105, name: "Trisha", salary: 40000},
]

const getAllEmployees = (req, res) => {
  res.json({
    message: "All employees fetched",
    data: employees
  })
}

const getAllEmployeeById = (req, res ) => {
  const id = req.params.id;

  const employee = employees.find((employee) => employee.id == id);

  if(employee){
    res.json({
      message: "Employee found",
      data: employee
    })
  } else {
    res.json({
      message: `Employees not found whose id is ${id}`
    })
  }
}

const getAllEmployeesBySalary = (req, res) => {
  const salary = req.params.salary;

  const filteredEmployees = employees.filter((employee) => employee.salary > salary);
  
  if(filteredEmployees.length != 0){
    res.json({
      message: "Employees fetched",
      data: filteredEmployees
    })
  } else {
    res.json({
      message: `Employees not found whose salary is greater than ${salary}`
    })
  }

}

module.exports = {
  getAllEmployees, getAllEmployeesBySalary, getAllEmployeeById
}
