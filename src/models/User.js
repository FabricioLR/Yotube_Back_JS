const { Model, DataTypes } = require("sequelize")

class User extends Model{
    static init(sequelize){
        super.init({
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            nome: DataTypes.STRING,
            foto_url: DataTypes.STRING,
        }, {
            sequelize,
        })
    }
    static associate(models){
        this.hasMany(models.Video, { foreignKey: "owner", as: "videos" })
    }
}
module.exports = User