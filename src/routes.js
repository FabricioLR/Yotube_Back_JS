const express = require("express")
const router = express.Router()
const videoController = require("./controllers/videoController")

router.post("/addvideo", videoController.store)
router.get("/getvideos", videoController.getdata)
router.post("/getexpecifyvideo", videoController.getexpecifyvideo)

module.exports = router