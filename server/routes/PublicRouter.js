const express = require("express");
const PublicController = require("../controllers/PublicController");
const { authorizationAdminOrBidder } = require("../middlewares/authorization");
const authentication = require("../middlewares/authentication");
const router = express.Router();

router.get("/items", PublicController.getAllItems);
router.get("/items/:id", PublicController.getItemById);
router.get("/items/bid/highest/:id", PublicController.getHighestBidById);
router.get("/user/:id", PublicController.getUserById)
router.post(
  "/items/:id/bid",
  authentication,
  authorizationAdminOrBidder,
  PublicController.bidItem
);
router.get("/items/bid/:id", PublicController.getAllBidByUserId);

module.exports = router;
