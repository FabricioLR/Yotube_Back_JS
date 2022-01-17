var admin = require("firebase-admin")

var serviceAccount = require("../config/FirebaseConfig.json")

const Bucket = "teste-javascript-2062a.appspot.com"

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: Bucket
})

const storage = admin.storage().bucket()

const UploadImage = (req, res, next) => {
    if (!req.file) return next()

    const video = req.file
    const arquivoName = Number(new Date()) + "." + video.originalname.split(".").pop()

    const file = storage.file("/videos" + arquivoName)

    const stream = file.createWriteStream({
        metadata: {
            contentType: video.mimetype
        }
    })

    stream.on("finish", async () => {
        await file.makePublic()

        req.file.url = file.publicUrl()
        
        next()
    })

    stream.end(video.buffer)

}

module.exports = UploadImage
