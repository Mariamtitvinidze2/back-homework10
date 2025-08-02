const express = require("express");
const ExpensesRoute = require("./expenses/expenses.route.js");
const randomRouter = require("./randomFacts/random.route.js");
const halfPassedMiddleware = require("./middlewares/incomplete.middleware.js");
const app = express();
app.use(express.json());

app.use("/expenses", ExpensesRoute);
app.use("/random", halfPassedMiddleware, randomRouter);

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
