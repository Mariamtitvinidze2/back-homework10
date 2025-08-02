const { Router } = require("express");

const randomRouter = Router();

const FactArray = ["rame", "rame1", "rame2", "rame3", "rame4"];

randomRouter.get("/", (req, res) => {
  const randomIndex = Math.floor(Math.random() * FactArray.length);
  const random = FactArray[randomIndex];
  res.send(random);
});

module.exports = randomRouter;
