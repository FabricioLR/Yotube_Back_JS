const { Client } = require('pg')

const client = new Client({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
})

client.connect()

module.exports = client