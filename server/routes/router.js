const express = require("express");
const router = express.Router();
const AuthRouter = require("./AuthRouter");
const ItemRouter = require("./ItemRouter");
const AdminFeature = require("./AdminFeature");
const authentication = require("../middlewares/authentication");
const { authorizationAdmin } = require("../middlewares/authorization");

//setiap endpoint berbeda nnti buat file router masing-masing

router.use(AuthRouter);

router.use(authentication);
//apapun dibawah ini kena authentication
router.use("/items", ItemRouter);

module.exports = router;
