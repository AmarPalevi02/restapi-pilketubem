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
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "NIM harus diisi"
            },
        }
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
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        allowNull: false,
        defaultValue: 'user',
    },
    otp: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: "OTP harus d isi"
            }
        }
    }
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
});

Users.prototype.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
};

module.exports = Users;

(async () => {
    await db.sync()
})();
