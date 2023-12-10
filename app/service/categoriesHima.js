const categoriesHIMA = require('../../app/api/v1/categoriesHiMA/mode')

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

module.exports = {
    createHima
}