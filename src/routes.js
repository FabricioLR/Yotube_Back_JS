const express = require("express")
const multer = require("multer")

const Multer = multer({
    storage: multer.memoryStorage(),
    limits: 1000000
})

const routes = express.Router()

const authController = require("./controllers/authController")
const videoController = require("./controllers/videoController")

const AuthController = new authController()
const VideoContrller = new videoController()

const VerifyToken = require("./services/security/VerifyToken")
const FirebaseStorageVideo = require("./services/firebaseStorage/FirebaseStorageVideo")
const FirebaseStorageImage = require("./services/firebaseStorage/FirebaseStorageImage")

routes.post("/Register", AuthController.Register)
routes.post("/Authenticate", AuthController.Authenticate)
routes.post("/ChangeUserImage", VerifyToken, Multer.single("file"), FirebaseStorageImage, AuthController.ChangeUserImage)
routes.get("/AuthenticateByToken", VerifyToken, AuthController.AuthenticateByToken)

routes.post("/CreateVideo", VerifyToken, Multer.single("file"), FirebaseStorageVideo, VideoContrller.CreateVideo)
routes.post("/GetVideo", VideoContrller.GetVideo)
routes.post("/SearchVideos", VideoContrller.SearchVideos)
routes.get("/GetVideos", VideoContrller.GetVideos)
routes.put("/UpdateVisualizations", VideoContrller.UpdateVisualizations)

module.exports = routes