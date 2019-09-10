const express = require("express")

const auth = require("../middlewares/auth")
const merchant = require("./merchants.controllers")

const router = express.Router()

/* POST methods */
router.post("/signup/", merchant.signup)
router.post("/login/", merchant.login)

router.get("/", auth, merchant.findByID)
router.get("/name/:name", auth, merchant.findByName)

router.put("/", auth, merchant.update)

router.delete("/", auth, merchant.delete)

module.exports = router
