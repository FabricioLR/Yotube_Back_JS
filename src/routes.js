const express = require("express")
const multer = require("multer")

const Multer = multer({
    storage: multer.memoryStorage(),
    limits: 1000000
})

const routes = express.Router()

const authMiddleware = require("./middlewares/authMiddleware")
const FirebaseService = require("./services/FirebaseService")

const videoController = require("./controllers/videoController")
const authController = require("./controllers/authController")

routes.post("/addvideo", authMiddleware, Multer.single("file"), FirebaseService, videoController.store)
routes.post("/getexpecifyvideo", videoController.getexpecifyvideo)
routes.post("/searchvideos", videoController.searchvideos)
routes.get("/getvideos", videoController.getdata)
routes.put("/updatevisualizacoes", videoController.updatevisualizacoes)

routes.post("/register", authController.register)
routes.post("/authenticate", authController.authenticate)
routes.get("/profile", authMiddleware, authController.profile)

module.exports = routes