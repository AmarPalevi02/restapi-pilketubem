const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
const db = require('../../../configs/connection')

const Admin = db.define('admin', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "Format email tidak valid"
            },
            notEmpty: {
                msg: "Email harus diisi"
            }
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Password harus diisi"
            },
            len: {
                args: [6],
                msg: "Password minimal harus memiliki panjang 6 karakter"
            }
        }
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        allowNull: false,
        defaultValue: 'user',
    },
}, {
    hooks: {
        beforeSave: async (user) => {
            if (user.changed('password')) {
                const saltRounds = 10;
                const hashedPassword = await bcrypt.hash(user.password, saltRounds);
                user.password = hashedPassword;
            }
        }
    },
})

Admin.prototype.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
};

module.exports = Admin;

(async () => {
    await db.sync()
})();
