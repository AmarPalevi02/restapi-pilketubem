const categoriesBEM = require('../api/v1/categoriesBEM/model')

const createBEM = async(req) => {
    const {
        name,
        imageId,
        about,
        visi
    } = req.body

    const result = await categoriesBEM.create({
        name,
        imageId,
        about,
        visi
    })

    return result
}

module.exports = {
    createBEM
}