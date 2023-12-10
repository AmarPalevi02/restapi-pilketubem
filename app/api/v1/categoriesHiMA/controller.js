const { StatusCodes } = require('http-status-codes')
const { createHima } = require('../../../service/categoriesHima')

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

module.exports = {
    create
}