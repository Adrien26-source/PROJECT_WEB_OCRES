var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("C'est ma page d'accueil");
});

module.exports = router;
