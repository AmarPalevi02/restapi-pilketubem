const { DataTypes } = require('sequelize')
const db = require('../../../configs/connection')

const Image = db.define('image', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fileName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Image;

(async () => {
    await db.sync()
})();