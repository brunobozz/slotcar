const express = require("express");
const router = express.Router();

const carsList = [];

router.get("/", (req, res) => {
  res.json(carsList);
});

router.post("/", (req, res) => {
  const postData = req.body;
  console.log(postData);
  carsList.push(postData);
  res.send("Car added!");
});

module.exports = router;
