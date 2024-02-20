const express = require("express");
const ItemController = require("../controllers/ItemController");
const { authorizationAdmin } = require("../middlewares/authorization");
const router = express.Router();

router.post("/", authorizationAdmin, ItemController.createItem);

module.exports = router;
