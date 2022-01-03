module.exports = {
    "username": process.env.name_user_db,
    "password": process.env.password,
    "database": process.env.database,
    "host": process.env.host,
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

