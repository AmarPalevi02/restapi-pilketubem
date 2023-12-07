const Users = require('../api/v1/user/model')


const createUsers = async(req, res, next) => {
    const {nim, name, email, password, confirmPassword } = req.body;

    if(password !== confirmPassword) console.log('password not meching')

    const result = await Users.create({
        nim,
        name,
        email,
        password
    })

    return result
}

const getUsers = async (req) => {
    const result = await Users.findAll();

    return result
}

module.exports = {
    getUsers,
    createUsers
}