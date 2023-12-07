const {getUsers, createUsers} = require('../../../service/user')
const { StatusCodes } = require("http-status-codes")

const getAllUser = async(req, res, next) => {
    try {
        const result = await  getUsers(req)

        res.status(StatusCodes.OK).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const sigin = async(req, res, next) => {
    try {
        const result = await createUsers(req)

        res.status(StatusCodes.CREATED).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {getAllUser, sigin}