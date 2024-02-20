const express = require("express");
const router = express.Router();
const AuthRouter = require("./AuthRouter");

//setiap endpoint berbeda nnti buat file router masing-masing

router.use(AuthRouter);

module.exports = router;
