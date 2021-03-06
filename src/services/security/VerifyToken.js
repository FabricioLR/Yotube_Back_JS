const jwt = require("jsonwebtoken")

const VerifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorizationtoken

        console.log(token)

        if (token === null || token === undefined || token === "" || token === "null"){
            return res.status(400).send({ error: "token must be provided"})
        }
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) return res.status(400).send({ error: "token invalid" })

            req.userId = decoded.id
            return next()
        })
    } catch (error) {
        return res.status(400).send({ error: "validation token error" })
    }
}

module.exports = VerifyToken