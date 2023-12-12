const categoriesHIMA = require('../../app/api/v1/categoriesHiMA/mode')
const { BadRequestError } = require('../errors')

const createHima = async (req) => {
    const {
        name,
        imageId,
        about,
        visi
    } = req.body

    const result = await categoriesHIMA.create({
        name,
        imageId,
        about,
        visi
    })

    return result
}

const showAll = async () => {
    const result = await categoriesHIMA()

    return result
}

const deleteHima = async (req) => {
    const { id } = req.params

    const result = await categoriesHIMA.destroy()

    if (!result) throw new BadRequestError(`Tidak ada categoriess dengan id : ${id}`)

    return result
}

module.exports = {
    createHima,
    showAll,
    deleteHima
}