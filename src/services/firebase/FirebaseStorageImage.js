const storage = require("./index")

const UploadImage = (req, res, next) => {
    if (!req.file) return next()

    const image = req.file
    const arquivoName = Number(new Date()) + "." + image.originalname.split(".").pop()

    const file = storage.file("/images" + arquivoName)

    const stream = file.createWriteStream({
        metadata: {
            contentType: image.mimetype
        }
    })

    stream.on("finish", async () => {
        await file.makePublic()

        req.file.url = file.publicUrl()
        
        next()
    })

    stream.end(image.buffer)

}

module.exports = UploadImage