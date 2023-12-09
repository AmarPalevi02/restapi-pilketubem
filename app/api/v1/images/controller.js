const { createImages } = require('../../../service/images')
const { StatusCodes } = require('http-status-codes')

const upload = async (req, res, next) => {
    try {
        const result = await createImages(req)

        res.status(StatusCodes.CREATED).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { upload }