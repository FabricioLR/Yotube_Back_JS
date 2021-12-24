require("dotenv").config()
const express = require("express")
const cors = require("cors")
const routes = require("./routes.js")
const port = process.env.PORT || 3333

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)

app.listen(port, () => {
  console.log("server rodando na porta " + port)
})


