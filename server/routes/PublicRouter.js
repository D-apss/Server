const express = require("express");
const PublicController = require("../controllers/PublicController");
const { authorizationAdminOrBidder } = require("../middlewares/authorization");
const router = express.Router();

router.get("/items", PublicController.getAllItems);
router.get("/items/bid/:id", PublicController.getAllBidByUserId);
router.post(
  "/items/:id/bid",
  authorizationAdminOrBidder,
  PublicController.bidItem
);
router.get("/items/bid/highest", PublicController.getHighestBid);

module.exports = router;