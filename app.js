const express = require("express");
const employeeRouter = require("./src/router/employeeRouter.js")
const dbConnect = require("./src/utils/DBConnection.js")
dbConnect();

const app = express();
app.use(express.json());
const PORT = 3000;

app.use(employeeRouter);

const productRouter = require("./src/router/productRouter.js");
const cityRouter = require("./src/router/cityRouter.js");
const bookRouter = require("./src/router/bookRouter.js");
const stateRouter = require("./src/router/stateRouter.js");
const categoryRouter = require("./src/router/categoryRouter.js");

app.use("/product", productRouter);
app.use("/city", cityRouter);
app.use("/book", bookRouter);
app.use("/state", stateRouter);
app.use("/category", categoryRouter);

app.get("/", (req, res) => {
  res.send("Slash api called")
})

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`)
})
