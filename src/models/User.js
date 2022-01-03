const { Model, DataTypes } = require("sequelize")

class User extends Model{
    static init(sequelize){
        super.init({
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            nome: DataTypes.STRING,
        }, {
            sequelize,
        })
    }
}
module.exports = User