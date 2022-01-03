const Sequelize = require("sequelize")
const dbconfig = require("../config/db")

const Video = require("../models/Video")
const User = require("../models/User")

const connection = new Sequelize(dbconfig)

Video.init(connection)
User.init(connection)

module.exports = connection