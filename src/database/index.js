const Sequelize = require("sequelize")
const dbconfig = require("../config/db")

const Video = require("../models/Video")
const User = require("../models/User")

const connection = new Sequelize(dbconfig)

Video.init(connection)
User.init(connection)

Video.associate(connection.models)
User.associate(connection.models)

module.exports = connection