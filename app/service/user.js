const Users = require('../api/v1/user/model')
const BadRequestError = require('../errors')


const createUsers = async(req, res, next) => {
    const {nim, name, email, password } = req.body;
    const role = 'user'

    const result = await Users.create({
        nim,
        name,
        email,
        password,
        role
    })
    // if(req.body.email === result.email) console.log('email sudah terdaftar')

    return result
}

const sigin = async(req) => {
    const {nim, password} = req.body

    if(!nim || !password) throw new BadRequestError('Akun Anda Tidaak Ada')

    const result = await Users.findOne({nin: nim })

    if(!result) throw new BadRequestError('invalid credential')

    // const  
} 

const getUsers = async (req) => {
    const result = await Users.findAll();

    return result
}

module.exports = {
    getUsers,
    createUsers,
    sigin
}