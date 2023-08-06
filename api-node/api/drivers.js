const express = require("express");
const router = express.Router();

const driversList = [];

router.get("/", (req, res) => {
  res.json(driversList);
});

router.post("/", (req, res) => {
  const postData = req.body;
  console.log(postData);
  driversList.push(postData);
  res.send("Driver added!");
});

module.exports = router;
