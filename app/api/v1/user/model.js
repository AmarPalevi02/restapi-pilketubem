const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');
const db = require('../../../configs/connection');

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nim: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    hooks: {
        beforeCreate: async (user) => {
            const hashedPassword = await Users.hashPassword(user.password);
            user.password = hashedPassword;
        },
        beforeSave: async (user) => {
            if (user.changed('password')) {
                const hashedPassword = await Users.hashPassword(user.password);
                user.password = hashedPassword;
            }
        }
    },
});

// Fungsi untuk menghash password
Users.hashPassword = async (password) => {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
};

// Fungsi untuk membandingkan password
Users.prototype.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

module.exports = Users;

(async () => {
    await db.sync()
})();
