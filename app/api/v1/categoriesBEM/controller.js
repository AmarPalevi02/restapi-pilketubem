const { StatusCodes } = require('http-status-codes')
const { createBEM } = require('../../../service/categoriesBEM')

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

module.exports = {
    create
}