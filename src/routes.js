const express = require("express")

const routes = express.Router()

const authMiddleware = require("./middlewares/authMiddleware")

const videoController = require("./controllers/videoController")
const authController = require("./controllers/authController")

routes.post("/addvideo", authMiddleware, videoController.store)
routes.post("/getexpecifyvideo", videoController.getexpecifyvideo)
routes.get("/getvideos", videoController.getdata)
routes.put("/updatevisualizacoes", videoController.updatevisualizacoes)

routes.post("/register", authController.register)
routes.post("/profile", authMiddleware, authController.profile)

module.exports = routes