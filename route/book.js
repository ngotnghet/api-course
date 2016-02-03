"use strict";

var express = require("express");
var router = express.Router();
var bookContronller = require("../controller/book");


router.get("/books", bookContronller.getListBooks);
module.exports = router;
