const { StatusCodes } = require('http-status-codes')
const { createDPM, showAll, deleteDPM } = require('../../../service/mysql/categoriesDPM')

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

const index = async (req, res, next) => {
    try {
        const result = await showAll()

        res.status(StatusCodes.OK).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const deletOne = async (req, res, next) => {
    try {
        const result = await deleteDPM(req)

        res.status(StatusCodes.OK).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create,
    index,
    deletOne
}