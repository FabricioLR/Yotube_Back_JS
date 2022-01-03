const { Model, DataTypes } = require("sequelize")

class Video extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            url: DataTypes.STRING,
            like: DataTypes.INTEGER,
            deslike: DataTypes.INTEGER,
            visualizacoes: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

module.exports = Video