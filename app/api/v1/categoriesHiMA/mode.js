const { DataTypes, json } = require('sequelize')
const Image = require('../images/model')
const db = require('../../../configs/connection')

const CategoriesHIMA = db.define('categoriesHIMA', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Nama harus diisi"
            },
            len: {
                args: [3],
                msg: "Nama minimal harus memiliki panjang 6 karakter"
            }
        }
    },
    imageId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Image,
            key: 'id'
        }
    },
    about: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "About harus diisi"
            },
            len: {
                args: [3],
                msg: "About minimal harus memiliki panjang 6 karakter"
            }
        }
    },
    visi:{
        type: DataTypes.JSON
    }
})

CategoriesHIMA.belongsTo(Image, { foreignKey: 'imageId' });

module.exports = CategoriesHIMA;

(async () => {
    await db.sync()
})();