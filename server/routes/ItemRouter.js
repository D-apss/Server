const express = require("express");
const ItemController = require("../controllers/ItemController");
const { authorizationAdmin } = require("../middlewares/authorization");
const router = express.Router();

router.post("/", authorizationAdmin, ItemController.createItem);
router.get("/", authorizationAdmin, ItemController.getAllItem);

module.exports = router;
