const { StatusCodes } = require('http-status-codes')
const { createHima, showAll } = require('../../../service/categoriesHima')

const create = async (req, res, next) => {
    try {
        const result = await createHima(req)

        res.status(StatusCodes.CREATED).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const index = async(req, res, next) => {
    try {
        const result = await showAll()

        res.status(StatusCodes.OK).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create,
    index
}