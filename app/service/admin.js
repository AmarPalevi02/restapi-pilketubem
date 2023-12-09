const Admin = require('../api/v1/admin/model')
const { BadRequestError, Unauthorized } = require('../errors')

const createAdmin = async (req) => {
    const { email, password } = req.body
    const role = 'admin'

    const result = await Admin.create({
        email,
        password,
        role
    })

    return result
}

const siginAdmin = async (req) => {
    const { email, password } = req.body

    if(!email || !password) throw new BadRequestError('Interna credential')

    const admin = await Admin.findOne({ where: { email } })
    
    if(!admin) throw new Unauthorized('Email tidak di temukan')

    const isPassworCorecct = await admin.comparePassword(password)

    if(!isPassworCorecct) throw new Unauthorized('Password salah')

    return admin
}

module.exports = {
    createAdmin,
    siginAdmin
}