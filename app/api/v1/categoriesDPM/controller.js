const { StatusCodes } = require('http-status-codes')
const { createDPM } = require('../../../service/categoriesDPM')

const create = async (req, res, next) => {
    try {
        const result = await createDPM(req)

        res.status(StatusCodes.CREATED).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create
}