module.exports = {
    "username": process.env.name_user_db || "njslkwjt",
    "password": process.env.password || "oiZsr-r2_JsU8DkvkRk8YNPkWWKYxNxp",
    "database": process.env.database || "njslkwjt",
    "host": process.env.host || "kashin.db.elephantsql.com",
    "dialect": "postgres",
    "define": {
        timestamps: true,
        underscored: true,
    },
}
//yarn sequelize db:create
//yarn sequelize migration:create --name=create-users
//yarn sequelize db:migrate
//yarn sequelize db:migrate:undo desfaz a ultima migration

