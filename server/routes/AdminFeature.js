const express = require("express");
const AdminController = require("../controllers/AdminController");
const router = express.Router();



router.post("/item", AdminController.createItem);

module.exports = router;
