const { createAdmin, siginAdmin } = require('../../../service/admin')
const { StatusCodes } = require('http-status-codes')

const SigUp = async (req, res, next) => {
    try {
        const result = await createAdmin(req)

        res.status(StatusCodes.CREATED).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const SigIn = async (req, res, next) => {
    try {
        const result = await siginAdmin(req)

        res.status(StatusCodes.OK).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    SigUp,
    SigIn
}