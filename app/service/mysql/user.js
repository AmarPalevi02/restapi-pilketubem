const Users = require('../../api/v1/user/model')
const { BadRequestError, Unauthorized } = require('../../errors')

const createUsers = async (req, res, next) => {
    const { nim, name, email, password } = req.body;
    const role = 'user'

    const result = await Users.create({
        nim,
        name,
        email,
        password,
        role
    })

    return result
}

const siginUser = async (req) => {
    const { nim, password } = req.body

    if (!nim || !password) throw new BadRequestError('Akun Anda Tidaak Ada')

    const result = await Users.findOne({ where: { nim } })

    if (!result) throw new Unauthorized('NIM tidak di temukan')

    const isPassworCorecct = await result.comparePassword(password)

    if (!isPassworCorecct) throw new Unauthorized('password slah')

    return result
}

const getUsers = async (req) => {
    const result = await Users.findAll();

    return result
}

module.exports = {
    getUsers,
    createUsers,
    siginUser
}