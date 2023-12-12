const { StatusCodes } = require('http-status-codes')
const { createBEM, showAll } = require('../../../service/categoriesBEM')

const create = async (req, res, next) => {
    try {
        const result = await createBEM(req)

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