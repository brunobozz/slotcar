const express = require("express");
const router = express.Router();

const routerCars = require("./cars");
const routerDrivers = require("./drivers");


router.get("/", (req, res) => {
  res.send("API Run");
});

router.use("/cars", routerCars);
router.use("/drivers", routerDrivers);

module.exports = router;
