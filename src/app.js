const express = require("express")
const cors = require("cors")

class app {
    constructor(){
        this.express = express()

        this.middlewares()
        this.router()
    }
    middlewares(){
        this.express.use(cors())
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: false }))
    }
    router(){
        this.express.use(require("./routes"))
    }
}

module.exports = new app().express