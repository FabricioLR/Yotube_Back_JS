const { Model, DataTypes } = require("sequelize")

class Video extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            url: DataTypes.STRING,
            like: DataTypes.INTEGER,
            deslike: DataTypes.INTEGER,
            visualizacoes: DataTypes.INTEGER,
        }, {
            sequelize,
        })
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey: "owner", as: "users" })
        this.belongsToMany(models.User, { foreignKey: "video_id", as: "historic", through: "users-historic-video" })
    }
}

module.exports = Video